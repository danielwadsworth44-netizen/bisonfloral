Drop your exports here (any filenames). Run from project root:

  npm run wedding:ingest

Files are sorted A→Z / 1→9, then assigned to site slots 01 → 18 in that order.

To control order without renaming to our long slugs: prefix files in Finder, e.g.
  01_IMG1234.jpg, 02_IMG5678.jpg, …

Slot intent (match your sort order to this if you can):
  01 Field / ground florals (also home page “What we do”)
  02 Ceremony arch    03 Veil / couple field    04 Golden hour bouquet
  05 Bride + bridesmaids    06 Western / mountain    07 Burgundy bouquet
  08 Ground ceremony    09 Bouquet + boutonniere    10 Reception table
  11 Garden bouquet couple    12 Dogs + florals    13 Wedding party field
  14 River / yellow bouquet    15 Floral pillars    16 Lodge wide
  17 Golden hour couple    18 Overhead sweetheart table

After ingesting, commit ../ (parent) *.jpg files — not this folder (incoming is gitignored).
