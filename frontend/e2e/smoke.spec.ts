import { expect, test } from "@playwright/test";

test("a home carrega com o hero e o catálogo", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(/arte digital/i);
  await expect(page.getByRole("heading", { name: /obras em destaque/i })).toBeVisible();
});

test("uma rota inexistente exibe a página 404", async ({ page }) => {
  await page.goto("/rota-inexistente");

  await expect(page.getByRole("heading", { name: /página não encontrada/i })).toBeVisible();
});
