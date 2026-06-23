# FAQ Style Audit: SMO 254 Page

Scope: `materials/smo-254.html`

No website HTML, CSS, JavaScript, image, or asset files were modified for this audit.

## Finding

The FAQ questions in the SMO 254 page are rendering in a near-black color because the FAQ question markup uses plain `<h3>` elements inside `.faqItem` cards, but the page does not define a specific color rule for `h3` or `.faqItem h3`.

Current FAQ markup pattern:

```html
<div class="faqItem" style="padding:12px">
  <h3>What is SMO 254 stainless steel?</h3>
  <p>...</p>
</div>
```

The inline style `style="padding:12px"` only controls spacing. It does not set text color.

The `.faqItem` class also does not set text color. It only controls border, radius, background, shadow, and transition:

```css
.relItem,.faqItem{
  border:1px solid rgba(16,37,84,.12) !important;
  border-radius:8px !important;
  background:#fff !important;
  box-shadow:0 10px 24px rgba(15,30,60,.05);
  transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;
}
```

Because no FAQ heading color is defined, the browser lets the `<h3>` inherit the page-level body color:

```css
body{
  color:var(--ink);
}
```

On this page, `--ink` is:

```css
--ink:#0b1220;
```

That color reads visually as black / near-black.

## Existing Rubinox Color Pattern

Across the Rubinox website, the common color system is:

```css
--ink:#0b1220;
--ink2:#132a63;
--muted:#566b9a;
```

Observed usage:

- Page/body default text: `var(--ink)` / `#0b1220`
- Main headings such as `h1` and `h2`: `var(--ink2)` / `#132a63`
- Paragraph/body copy: `var(--muted)` / `#566b9a`
- Premium dark accent/hover/footer color: `#07101f`
- Gold brand accent: `#e2a02f`

Relevant SMO 254 page rules:

```css
h1{color:var(--ink2)}
h2{color:var(--ink2)}
p{color:var(--muted)}
ul{color:var(--muted)}
.relItem strong{color:var(--ink2)}
.relItem span{color:var(--muted)}
```

## Root Cause

The FAQ question headings are black because `<h3>` has no Rubinox-specific color rule and inherits `body{color:var(--ink)}`.

The responsible styling chain is:

1. FAQ card uses `.faqItem`, which does not define heading color.
2. FAQ question uses a plain `<h3>`, and there is no global `h3` rule.
3. The `<h3>` inherits `body{color:var(--ink)}`.
4. `--ink` resolves to `#0b1220`, creating the near-black appearance.

## Recommended Fix

Use the standard Rubinox heading color for FAQ questions:

```css
.faqItem h3{
  color:var(--ink2);
}
```

Resolved color:

```css
#132a63
```

This is the most consistent choice because FAQ questions function as card-level headings, and the rest of the website uses `#132a63` / `var(--ink2)` for headings and important linked card titles.

FAQ answers should remain in the normal paragraph/body color:

```css
.faqItem p{
  color:var(--muted);
}
```

Resolved color:

```css
#566b9a
```

## Recommendation Summary

- FAQ question color: `var(--ink2)` / `#132a63`
- FAQ answer color: `var(--muted)` / `#566b9a`
- Do not use `#07101f` for the default FAQ question text; reserve it for premium dark accents, hover states, button text on gold, and footer backgrounds.

