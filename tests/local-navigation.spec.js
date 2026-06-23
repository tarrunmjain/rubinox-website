const { test, expect } = require("playwright/test");

test("opens the home page and navigates to core pages", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveTitle(/Stainless Steel Supplier in Mumbai, India/i);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Stainless Steel Supplier");

  await page.goto("/quotation.html", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveURL(/quotation\.html$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Request a Fast Quotation");

  await page.goto("/industries.html", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveURL(/industries\.html$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Industries We Serve");
});

test("opens a material page and follows an internal grade link", async ({ page }) => {
  await page.goto("/materials/stainless-steel.html", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Stainless Steel Supplier in India");

  await page.getByRole("link", { name: "304", exact: true }).click();
  await expect(page).toHaveURL(/materials\/ss-304-supplier-india\.html$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("SS 304 Supplier in India");
});
