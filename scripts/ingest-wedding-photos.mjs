#!/usr/bin/env node
/**
 * Map arbitrary filenames → fixed gallery slot names (01…18).
 *
 * 1. Put JPG/PNG exports in: public/images/weddings/_incoming/
 * 2. Files are sorted alphabetically, then assigned to slots 01→18 in that order.
 *    To control order: rename in Finder to 01_something.jpg, 02_other.jpg, …
 * 3. Run: npm run wedding:ingest
 * 4. Commit public/images/weddings/*.jpg and push.
 *
 * PNG → JPEG via `sips` on macOS. Elsewhere: export JPG first, or install ImageMagick
 * and set CONVERT_CMD (e.g. `magick`) for convert step.
 *
 * Slot list matches src/content/wedding-photos.ts.
 */

import { readdir, mkdir, copyFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");
const INCOMING = join(ROOT, "public/images/weddings/_incoming");
const OUT = join(ROOT, "public/images/weddings");

/** Keep in sync with src/content/wedding-photos.ts `file` strings (all .jpg). */
const SLOT_FILES = [
  "01-bride-field-ground-florals.jpg",
  "02-rectangular-ceremony-arch.jpg",
  "03-couple-veil-wildflower-field.jpg",
  "04-bridal-bouquet-golden-hour.jpg",
  "05-bride-bridesmaids-bouquets.jpg",
  "06-western-mountain-bouquet.jpg",
  "07-bride-burgundy-bouquet.jpg",
  "08-ceremony-ground-installations.jpg",
  "09-bouquet-and-boutonniere.jpg",
  "10-reception-table-centerpiece.jpg",
  "11-garden-bouquet-couple.jpg",
  "12-couple-floral-dog-collars.jpg",
  "13-wedding-party-mountain-field.jpg",
  "14-bride-river-yellow-bouquet.jpg",
  "15-broken-arch-floral-pillars.jpg",
  "16-bride-bridesmaids-lodge.jpg",
  "17-couple-golden-hour-bouquet.jpg",
  "18-sweetheart-table-ground-florals.jpg",
];

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".WEBP"]);

function naturalKey(name) {
  return basename(name, extname(name)).replace(/\d+/g, (n) => n.padStart(8, "0"));
}

async function listIncoming() {
  if (!existsSync(INCOMING)) {
    await mkdir(INCOMING, { recursive: true });
  }
  const names = await readdir(INCOMING);
  const files = names.filter((n) => {
    if (n.startsWith(".") || n === "README.txt" || n === ".gitkeep") return false;
    return IMAGE_EXT.has(extname(n));
  });
  files.sort((a, b) => naturalKey(a).localeCompare(naturalKey(b), undefined, { numeric: true }));
  return files.map((n) => join(INCOMING, n));
}

function convertToJpeg(srcPath, destJpg) {
  if (process.platform === "darwin") {
    execSync(
      `sips -s format jpeg -s formatOptions 85 ${JSON.stringify(srcPath)} --out ${JSON.stringify(destJpg)}`,
      { stdio: "inherit" },
    );
    return;
  }
  const magick = process.env.CONVERT_CMD || "magick";
  execSync(`${magick} ${JSON.stringify(srcPath)} -quality 85 ${JSON.stringify(destJpg)}`, {
    stdio: "inherit",
  });
}

async function main() {
  const sources = await listIncoming();
  if (sources.length === 0) {
    console.log(`No images found in:\n  ${INCOMING}\n\nDrop .jpg / .png files there, then run again.`);
    process.exit(0);
  }

  const n = Math.min(sources.length, SLOT_FILES.length);
  if (sources.length > SLOT_FILES.length) {
    console.warn(
      `Using first ${SLOT_FILES.length} files (sorted); ignoring ${sources.length - SLOT_FILES.length} extra.\n`,
    );
  }
  if (sources.length < SLOT_FILES.length) {
    console.warn(
      `Only ${sources.length} file(s) — updating slots 01–${String(n).padStart(2, "0")} only; other slots unchanged.\n`,
    );
  }

  for (let i = 0; i < n; i++) {
    const dest = join(OUT, SLOT_FILES[i]);
    const src = sources[i];
    const ext = extname(src).toLowerCase();
    try {
      if (ext === ".jpg" || ext === ".jpeg") {
        await copyFile(src, dest);
      } else {
        convertToJpeg(src, dest);
      }
      console.log(`${SLOT_FILES[i]}  ←  ${basename(src)}`);
    } catch (e) {
      console.error(`Failed on ${basename(src)} → ${SLOT_FILES[i]}`, e);
      process.exit(1);
    }
  }

  console.log(
    `\nDone. Update alt text in src/content/wedding-photos.ts if a slot’s scene changed, then git add, commit, push.`,
  );
}

main();
