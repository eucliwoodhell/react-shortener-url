import { test, expect } from "@playwright/experimental-ct-react";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3001/");
});

test.describe("Home suite", () => {
  test("Render Home", async ({ page }) => {
    await expect(page.getByText("Home")).toBeVisible();
    await expect(page.getByText("Table Url")).toBeVisible();
  });
});
