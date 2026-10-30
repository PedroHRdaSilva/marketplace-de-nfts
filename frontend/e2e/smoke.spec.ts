import { expect, test } from "@playwright/test";

test("a home carrega e o status do ambiente responde", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(/descubra/i);
  await expect(page.getByTestId("system-status")).toContainText("ok");
});

test("uma rota inexistente exibe a página 404", async ({ page }) => {
  await page.goto("/rota-inexistente");

  await expect(page.getByRole("heading", { name: /página não encontrada/i })).toBeVisible();
});
