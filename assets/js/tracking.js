(function(){
  "use strict";

  var allowedEvents = {
    click_whatsapp_header: true,
    click_whatsapp_floating: true,
    click_whatsapp_quotation: true,
    click_whatsapp_grade_page: true,
    click_whatsapp_product_form: true,
    click_whatsapp_general: true,
    click_email_header: true,
    click_email_quotation: true,
    click_email_contact: true,
    click_email_general: true,
    click_phone_header: true,
    click_phone_contact: true,
    click_phone_general: true,
    click_request_quote_cta: true,
    click_company_profile_pdf: true,
    click_company_profile_page: true,
    click_technical_resources: true,
    click_quality_documentation: true,
    click_knowledge_hub_article: true,
    outbound_google_business_profile: true,
    outbound_indiamart: true,
    outbound_tradeindia: true,
    outbound_justdial: true,
    outbound_exportersindia: true,
    outbound_linkedin: true,
    outbound_instagram: true,
    outbound_facebook: true,
    quotation_form_start: true,
    quotation_form_whatsapp_submit: true,
    quotation_form_email_submit: true
  };

  function pagePath(){
    return window.location.pathname || "/";
  }

  function clean(value, fallback){
    var text = String(value || fallback || "general").toLowerCase();
    text = text.replace(/[^a-z0-9_-]+/g, "_").replace(/^_+|_+$/g, "");
    return text.slice(0, 64) || fallback || "general";
  }

  function urlFromHref(href){
    try {
      return new URL(href || "", window.location.href);
    } catch (error) {
      return null;
    }
  }

  function outboundDomain(url){
    if (!url || url.origin === window.location.origin) return "";
    return url.hostname.replace(/^www\./, "");
  }

  function destinationType(url){
    if (!url) return "unknown";
    if (url.protocol === "mailto:") return "email";
    if (url.protocol === "tel:") return "phone";
    if (url.hostname.indexOf("wa.me") !== -1 || url.hostname.indexOf("whatsapp") !== -1) return "whatsapp";
    if (/\.pdf$/i.test(url.pathname)) return "file";
    if (url.origin !== window.location.origin) return "outbound";
    return "internal";
  }

  function sendEvent(eventName, params){
    if (!allowedEvents[eventName]) return;
    if (typeof window.gtag !== "function") return;

    var payload = {
      page_path: pagePath()
    };
    if (params && params.link_type) payload.link_type = clean(params.link_type, "link");
    if (params && params.cta_location) payload.cta_location = clean(params.cta_location, "general");
    if (params && params.destination_type) payload.destination_type = clean(params.destination_type, "internal");
    if (params && params.outbound_domain) payload.outbound_domain = clean(params.outbound_domain, "external");
    if (params && params.file_type) payload.file_type = clean(params.file_type, "file");

    try {
      window.gtag("event", eventName, payload);
    } catch (error) {}
  }

  function isHeaderLink(anchor){
    return !!(anchor && anchor.closest && anchor.closest("header"));
  }

  function isFooterLink(anchor){
    return !!(anchor && anchor.closest && anchor.closest("footer"));
  }

  function contextText(anchor){
    if (!anchor) return "";
    return [
      anchor.getAttribute("onclick") || "",
      anchor.getAttribute("aria-label") || "",
      anchor.getAttribute("title") || "",
      anchor.className || "",
      anchor.id || "",
      anchor.textContent || "",
      pagePath()
    ].join(" ").toLowerCase();
  }

  function ctaLocation(anchor, fallback){
    var text = contextText(anchor);
    if (isHeaderLink(anchor)) return "header";
    if (isFooterLink(anchor)) return "footer";
    if (text.indexOf("floating") !== -1) return "floating";
    if (text.indexOf("hero") !== -1) return "hero";
    if (text.indexOf("final") !== -1) return "final_cta";
    if (text.indexOf("contact") !== -1) return "contact";
    if (text.indexOf("quote") !== -1 || text.indexOf("quotation") !== -1 || pagePath().indexOf("quotation") !== -1) return "quotation";
    if (text.indexOf("product") !== -1) return "product_form";
    if (pagePath().indexOf("/materials/") !== -1) return "grade_page";
    if (pagePath().indexOf("/blog/") !== -1 || pagePath() === "/blog.html") return "knowledge_hub";
    if (pagePath().indexOf("/locations/") !== -1) return "location_page";
    if (pagePath().indexOf("/export/") !== -1) return "export_page";
    return fallback || "general";
  }

  function whatsappEvent(anchor){
    var loc = ctaLocation(anchor, "general");
    if (loc === "header") return "click_whatsapp_header";
    if (loc === "floating") return "click_whatsapp_floating";
    if (loc === "quotation" || pagePath().indexOf("quotation") !== -1) return "click_whatsapp_quotation";
    if (pagePath().indexOf("/materials/") !== -1) return "click_whatsapp_grade_page";
    if (loc === "product_form" || pagePath().indexOf("product-forms") !== -1) return "click_whatsapp_product_form";
    return "click_whatsapp_general";
  }

  function emailEvent(anchor){
    var loc = ctaLocation(anchor, "general");
    if (loc === "header") return "click_email_header";
    if (loc === "quotation" || pagePath().indexOf("quotation") !== -1) return "click_email_quotation";
    if (loc === "contact" || pagePath().indexOf("contact") !== -1) return "click_email_contact";
    return "click_email_general";
  }

  function phoneEvent(anchor){
    var loc = ctaLocation(anchor, "general");
    if (loc === "header") return "click_phone_header";
    if (loc === "contact" || pagePath().indexOf("contact") !== -1) return "click_phone_contact";
    return "click_phone_general";
  }

  function externalEvent(url, text){
    var host = (url && url.hostname || "").replace(/^www\./, "").toLowerCase();
    var haystack = (host + " " + (text || "")).toLowerCase();
    if (haystack.indexOf("indiamart") !== -1) return "outbound_indiamart";
    if (haystack.indexOf("tradeindia") !== -1) return "outbound_tradeindia";
    if (haystack.indexOf("justdial") !== -1) return "outbound_justdial";
    if (haystack.indexOf("exportersindia") !== -1) return "outbound_exportersindia";
    if (haystack.indexOf("linkedin") !== -1) return "outbound_linkedin";
    if (haystack.indexOf("instagram") !== -1) return "outbound_instagram";
    if (haystack.indexOf("facebook") !== -1) return "outbound_facebook";
    if (haystack.indexOf("google") !== -1 || haystack.indexOf("share.google") !== -1) return "outbound_google_business_profile";
    return "";
  }

  function classifyAnchor(anchor){
    var href = anchor && anchor.getAttribute("href");
    if (!href) return null;

    var url = urlFromHref(href);
    var hrefLower = href.toLowerCase();
    var text = contextText(anchor);
    var params = {
      cta_location: ctaLocation(anchor, "general"),
      destination_type: destinationType(url)
    };

    var domain = outboundDomain(url);
    if (domain) params.outbound_domain = domain;

    if (hrefLower.indexOf("wa.me/") !== -1 || hrefLower.indexOf("whatsapp") !== -1) {
      params.link_type = "whatsapp";
      return { eventName: whatsappEvent(anchor), params: params };
    }
    if (hrefLower.indexOf("mailto:") === 0) {
      params.link_type = "email";
      return { eventName: emailEvent(anchor), params: params };
    }
    if (hrefLower.indexOf("tel:") === 0) {
      params.link_type = "phone";
      return { eventName: phoneEvent(anchor), params: params };
    }
    if (hrefLower.indexOf("rubinox-company-profile.pdf") !== -1) {
      params.link_type = "document";
      params.file_type = "pdf";
      return { eventName: "click_company_profile_pdf", params: params };
    }
    if (hrefLower.indexOf("company-profile.html") !== -1) {
      params.link_type = "internal";
      return { eventName: "click_company_profile_page", params: params };
    }
    if (hrefLower.indexOf("quotation.html") !== -1) {
      params.link_type = "internal";
      return { eventName: "click_request_quote_cta", params: params };
    }
    if (hrefLower.indexOf("technical-resources.html") !== -1) {
      params.link_type = "internal";
      return { eventName: "click_technical_resources", params: params };
    }
    if (hrefLower.indexOf("quality-documentation-support.html") !== -1) {
      params.link_type = "internal";
      return { eventName: "click_quality_documentation", params: params };
    }
    if (hrefLower.indexOf("/blog/") !== -1 || hrefLower.indexOf("blog/") === 0) {
      params.link_type = "internal";
      return { eventName: "click_knowledge_hub_article", params: params };
    }

    var outboundEvent = externalEvent(url, text);
    if (outboundEvent) {
      params.link_type = "outbound";
      return { eventName: outboundEvent, params: params };
    }

    return null;
  }

  function legacyEvent(method, label, url){
    var fakeAnchor = document.createElement("a");
    fakeAnchor.href = url || window.location.href;
    fakeAnchor.setAttribute("data-legacy-label", label || method || "");
    fakeAnchor.textContent = label || method || "";

    var methodName = String(method || "").toLowerCase();
    var eventName = "";
    if (methodName.indexOf("whatsapp") !== -1) eventName = whatsappEvent(fakeAnchor);
    else if (methodName.indexOf("email") !== -1) eventName = emailEvent(fakeAnchor);
    else if (methodName.indexOf("call") !== -1 || methodName.indexOf("phone") !== -1) eventName = phoneEvent(fakeAnchor);
    else if (methodName.indexOf("quote") !== -1 || methodName.indexOf("quotation") !== -1 || methodName.indexOf("navigation") !== -1) eventName = "click_request_quote_cta";

    if (!eventName) {
      var classified = classifyAnchor(fakeAnchor);
      if (classified) sendEvent(classified.eventName, classified.params);
      return;
    }
    var parsed = urlFromHref(fakeAnchor.href);
    sendEvent(eventName, {
      link_type: clean(methodName || "link", "link"),
      cta_location: clean(label || ctaLocation(fakeAnchor, "general"), "general"),
      destination_type: destinationType(parsed),
      outbound_domain: outboundDomain(parsed)
    });
  }

  window.trackLead = function(method, label){
    legacyEvent(method, label, window.location.href);
    return true;
  };

  window.trackLeadAndGo = function(method, label, url, newTab){
    var destination = url;
    var ctaLabel = label;
    if (arguments.length === 2) {
      destination = label;
      ctaLabel = method;
    }
    legacyEvent(method, ctaLabel, destination);
    window.setTimeout(function(){
      if (!destination) return;
      if (newTab) window.open(destination, "_blank", "noopener");
      else window.location.href = destination;
    }, 120);
    return false;
  };

  function bindClickTracking(){
    document.addEventListener("click", function(event){
      var anchor = event.target && event.target.closest ? event.target.closest("a[href]") : null;
      if (!anchor) return;
      var inline = anchor.getAttribute("onclick") || "";
      if (inline.indexOf("trackLead") !== -1) return;
      var classified = classifyAnchor(anchor);
      if (classified) sendEvent(classified.eventName, classified.params);
    }, true);
  }

  function bindQuotationFormTracking(){
    var form = document.getElementById("static-rfq-form");
    if (!form) return;

    var started = false;
    form.addEventListener("focusin", function(event){
      if (started) return;
      var field = event.target;
      if (!field || !field.matches || !field.matches("input,select,textarea")) return;
      started = true;
      sendEvent("quotation_form_start", {
        link_type: "form",
        cta_location: "quotation_form",
        destination_type: "form"
      });
    });

    form.addEventListener("submit", function(){
      sendEvent("quotation_form_email_submit", {
        link_type: "form",
        cta_location: "quotation_form",
        destination_type: "email"
      });
    }, true);

    var whatsappButton = document.getElementById("rfq-whatsapp");
    if (whatsappButton) {
      whatsappButton.addEventListener("click", function(){
        sendEvent("quotation_form_whatsapp_submit", {
          link_type: "form",
          cta_location: "quotation_form",
          destination_type: "whatsapp",
          outbound_domain: "wa.me"
        });
      }, true);
    }
  }

  function init(){
    bindClickTracking();
    bindQuotationFormTracking();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  window.rubinoxTracking = {
    track: sendEvent
  };
})();
