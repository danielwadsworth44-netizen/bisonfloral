#!/usr/bin/env python3
"""
One-off / repeat: pull unique images from Cursor chat-assets folder into wedding slots 01–18.

Default assets path is the Cursor project assets dir for this workspace; override:
  CURSOR_ASSETS=/path/to/assets python3 scripts/sync-wedding-from-cursor-assets.py

Rules:
- Skips Screenshot*, Bison_Floral* (logos), FC865F* (tiny misc).
- Dedupes by MD5.
- Puts 4Z2A9735* (field bride) in slot 01 if present; fills 02–18 from remaining, A→Z by filename.
- Requires macOS `sips` for PNG→JPEG (same as wedding:ingest).

If you have more than 17 other uniques, extras are skipped (add to _incoming and run npm run wedding:ingest to remap).
"""

from __future__ import annotations

import hashlib
import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/images/weddings"

SLOTS = [
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
]

DEFAULT_ASSETS = Path.home() / (
    ".cursor/projects/Users-danielwadsworth-TheClickBuilders/assets"
)


def md5_file(p: Path) -> str:
    h = hashlib.md5()
    with p.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def main() -> None:
    assets = Path(os.environ.get("CURSOR_ASSETS", DEFAULT_ASSETS))
    if not assets.is_dir():
        print(f"Missing assets dir: {assets}", file=sys.stderr)
        sys.exit(1)

    candidates: list[Path] = []
    for p in assets.iterdir():
        if not p.is_file():
            continue
        n = p.name
        if n.startswith("Screenshot") or n.startswith("Bison_Floral") or n.startswith("FC865F"):
            continue
        if p.suffix.lower() not in (".png", ".jpg", ".jpeg"):
            continue
        candidates.append(p)

    seen: dict[str, Path] = {}
    unique: list[Path] = []
    for p in sorted(candidates, key=lambda x: x.name):
        h = md5_file(p)
        if h in seen:
            continue
        seen[h] = p
        unique.append(p)

    hero = None
    for p in assets.glob("4Z2A9735*.png"):
        if p.is_file():
            hero = p
            break
    if hero is None:
        print("No 4Z2A9735*.png hero found; using first alphabetical unique.", file=sys.stderr)
        ordered = unique[:18]
    else:
        hero_h = md5_file(hero)
        rest = [p for p in unique if md5_file(p) != hero_h]
        rest.sort(key=lambda x: x.name)
        ordered = [hero] + rest[:17]

    if len(ordered) < 18:
        print(f"Need 18 unique images, found {len(ordered)}.", file=sys.stderr)
        sys.exit(1)

    OUT.mkdir(parents=True, exist_ok=True)
    for slot, src in zip(SLOTS, ordered, strict=True):
        dest = OUT / slot
        subprocess.run(
            ["sips", "-s", "format", "jpeg", "-s", "formatOptions", "88", str(src), "--out", str(dest)],
            check=True,
            capture_output=True,
        )
        print(f"{slot} <- {src.name}")

    out_hashes = {md5_file(OUT / s) for s in SLOTS}
    print(f"Unique output hashes: {len(out_hashes)} / 18")


if __name__ == "__main__":
    main()
