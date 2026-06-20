import { mdToPdf } from "md-to-pdf";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const [, , inputArg, outputArg] = process.argv;
if (!inputArg) {
  console.error("Usage: node scripts/md-to-pdf.mjs <input.md> [output.pdf]");
  process.exit(1);
}

const input = resolve(inputArg);
const output = resolve(outputArg || input.replace(/\.md$/i, ".pdf"));

const css = `
  body { font: 11pt/1.55 -apple-system, "Segoe UI", system-ui, sans-serif; color: #1a1a1a; max-width: 760px; }
  h1 { font-size: 24pt; color: #0a2540; border-bottom: 2px solid #0a2540; padding-bottom: 8px; margin-top: 0; }
  h2 { font-size: 16pt; color: #0a2540; margin-top: 28px; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; }
  h3 { font-size: 12pt; color: #0a2540; margin-top: 18px; }
  table { border-collapse: collapse; width: 100%; margin: 12px 0; font-size: 10pt; }
  th, td { border: 1px solid #d1d5db; padding: 6px 8px; text-align: left; vertical-align: top; }
  th { background: #f3f4f6; }
  code { background: #f3f4f6; padding: 1px 4px; border-radius: 3px; font-size: 10pt; }
  blockquote { border-left: 3px solid #0a2540; padding-left: 12px; color: #4b5563; margin: 12px 0; }
  hr { border: none; border-top: 1px solid #e5e7eb; margin: 24px 0; }
  ul, ol { padding-left: 22px; }
  li { margin: 3px 0; }
  a { color: #0a2540; }
`;

const pdf = await mdToPdf(
  { content: readFileSync(input, "utf8") },
  {
    dest: output,
    css,
    pdf_options: {
      format: "Letter",
      margin: { top: "24mm", right: "20mm", bottom: "24mm", left: "20mm" },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<div style="font-size:8pt;color:#6b7280;width:100%;padding:0 20mm;">Cloud Title — Content & Asset Gap List</div>',
      footerTemplate: '<div style="font-size:8pt;color:#6b7280;width:100%;padding:0 20mm;text-align:right;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    },
    launch_options: {
      executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    },
  }
);

if (pdf) {
  console.log(`PDF written: ${output}`);
} else {
  console.error("md-to-pdf returned no result");
  process.exit(1);
}
