import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import Home from "../src/pages/Home";

test.describe("Home suite", () => {
  test("Render Home", async ({ mount }) => {
    const components = await mount(<Home />);
    expect(components.locator(`id="url"`));
  });
});
