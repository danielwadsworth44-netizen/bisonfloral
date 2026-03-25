#!/usr/bin/env node
/**
 * Reads src/content/gallery-manifest.json and copies Cursor chat assets into public/images/weddings/.
 *
 * Each slot has { "out": "01-....jpg", "match": "prefix-" } — the first file in assetsDir whose
 * name starts with `match` wins (prefers newest mtime if several).
 *
 * Default assets dir: ~/.cursor/projects/Users-danielwadsworth-TheClickBuilders/assets
 * Override: CURSOR_ASSETS=/path/to/assets
 *
 * Requires macOS `sips` for PNG→JPEG.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");
const MANIFEST = join(ROOT, "src/content/gallery-manifest.json");
const OUT_DIR = join(ROOT, "public/images/weddings");

const DEFAULT_ASSETS = join(
  homedir(),
  ".cursor/projects/Users-danielwadsworth-TheClickBuilders/assets",
);

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".PNG", ".JPG", ".JPEG"]);

function pickSource(assetsDir, match) {
  const names = readdirSync(assetsDir);
  const hits = names.filter(
    (n) => IMAGE_EXT.has(n.slice(n.lastIndexOf("."))) && n.startsWith(match),
  );
  if (hits.length === 0) return null;
  hits.sort((a, b) => statSync(join(assetsDir, b)).mtimeMs - statSync(join(assetsDir, a)).mtimeMs);
  return join(assetsDir, hits[0]);
}

function convertToJpeg(src, dest) {
  execSync(`sips -s format jpeg -s formatOptions 90 ${JSON.stringify(src)} --out ${JSON.stringify(dest)}`, {
    stdio: "pipe",
  });
}

function runSlots(assetsDir, slots) {
  for (const row of slots) {
    const { out, match } = row;
    if (!out || !match) continue;
    const src = pickSource(assetsDir, match);
    if (!src) {
      console.error(`Missing asset for ${out} (no file starting with "${match}")`);
      process.exit(1);
    }
    const dest = join(OUT_DIR, out);
    convertToJpeg(src, dest);
    console.log(`${out}  ←  ${src.split("/").pop()}`);
  }
}

const raw = JSON.parse(readFileSync(MANIFEST, "utf8"));
const assetsDir = process.env.CURSOR_ASSETS || DEFAULT_ASSETS;

runSlots(assetsDir, raw.slots);

const rev = raw.reviewSlots;
if (rev?.enabled === true && Array.isArray(rev.top) && Array.isArray(rev.bottom)) {
  runSlots(assetsDir, rev.top);
  runSlots(assetsDir, rev.bottom);
  console.log("\nReview JPEGs written. Set wedding-photos.ts to use review-* files (see comment in manifest).");
}

console.log("\nDone. Commit public/images/weddings/*.jpg");
