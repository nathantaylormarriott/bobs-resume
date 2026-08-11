import { chromium } from "playwright";
import { homedir } from "node:os";
import { join } from "node:path";

const RESUME_URL = process.env.RESUME_URL ?? "http://localhost:8081/";
const OUTPUT_PATH = join(homedir(), "Downloads", "Bobby-Rawlings-Resume.pdf");

async function preparePageForPrint(page) {
  await page.evaluate(async () => {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("is-visible");
      el.style.opacity = "1";
      el.style.filter = "none";
      el.style.transform = "none";
    });

    document.querySelectorAll(".tilt-card").forEach((el) => {
      el.style.transform = "none";
    });

    await document.fonts.ready;
  });
}

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 1800 },
  });

  try {
    await page.goto(RESUME_URL, { waitUntil: "networkidle", timeout: 60_000 });
    await preparePageForPrint(page);
    await page.emulateMedia({ media: "print" });
    await page.waitForTimeout(300);

    await page.pdf({
      path: OUTPUT_PATH,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" },
    });

    console.log(`Saved resume PDF to ${OUTPUT_PATH}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
