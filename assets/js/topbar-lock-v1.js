(function(){
  const topBarLinks = document.querySelectorAll(".topbar-lock-v1 .utilityIcon");
  if(!topBarLinks.length) return;

  function markForClickReset(link){
    link.classList.add("is-click-reset");
    window.setTimeout(function(){
      if(document.activeElement === link){
        link.blur();
      }
    }, 0);
  }

  function blurActiveResetLink(){
    const active = document.activeElement;
    if(active && active.matches && active.matches(".topbar-lock-v1 .utilityIcon.is-click-reset")){
      active.blur();
    }
  }

  topBarLinks.forEach(function(link){
    link.addEventListener("pointerdown", function(event){
      if(event.pointerType === "mouse" || event.pointerType === "pen" || event.pointerType === "touch"){
        markForClickReset(link);
      }
    });

    link.addEventListener("click", function(event){
      if(event.detail > 0){
        markForClickReset(link);
      }
    });

    link.addEventListener("pointerleave", function(){
      link.classList.remove("is-click-reset");
    });

    link.addEventListener("blur", function(){
      if(!link.matches(":hover")){
        link.classList.remove("is-click-reset");
      }
    });
  });

  window.addEventListener("focus", blurActiveResetLink);
  document.addEventListener("visibilitychange", function(){
    if(!document.hidden){
      blurActiveResetLink();
    }
  });
})();
