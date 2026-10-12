import { chromium } from "playwright";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const HTML_PATH = join(__dirname, "og-image.html");
const OUTPUT_PATH = join(__dirname, "..", "public", "og-image.png");

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

  try {
    await page.goto(`file://${HTML_PATH}`, { waitUntil: "load" });
    await page.screenshot({ path: OUTPUT_PATH, type: "png" });
    console.log(`Saved OG image to ${OUTPUT_PATH}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
