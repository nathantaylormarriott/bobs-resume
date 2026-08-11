import { chromium } from "playwright";
import { homedir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const HTML_PATH = join(__dirname, "cv-basic.html");
const OUTPUT_PATH = join(homedir(), "Downloads", "cv basic.pdf");
const PUBLIC_PATH = join(__dirname, "..", "public", "Bobby-Rawlings-Resume.pdf");

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(`file://${HTML_PATH}`, { waitUntil: "load" });
    await page.emulateMedia({ media: "print" });

    await page.pdf({
      path: OUTPUT_PATH,
      format: "A4",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });

    await page.pdf({
      path: PUBLIC_PATH,
      format: "A4",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });

    console.log(`Saved basic CV to ${OUTPUT_PATH}`);
    console.log(`Saved public PDF to ${PUBLIC_PATH}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
