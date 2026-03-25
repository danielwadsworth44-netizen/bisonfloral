/**
 * Wedding images: public/images/weddings/
 *
 * — Filenames are fixed (01…18) so the gallery grid and review strips stay wired correctly.
 * — Swap a file on disk to change that slot; keep the same name unless you update `file` here.
 *
 * Slots 02, 03, 06–14, 16, 17 currently reuse the same hero image as 01 so the site does not
 * show unrelated weddings in the wrong places. Replace those JPGs with real shots when you have them.
 */

const dir = "/images/weddings";

/** Alt for slots that still use the hero image as a temporary stand-in. */
const ALT_SLOT_TBD =
  "Wedding florals in Montana — Bison Floral, Flathead Valley. (Gallery slot — add your photo for this position.)";

export type WeddingPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

function photo(file: string, width: number, height: number, alt: string): WeddingPhoto {
  return { src: `${dir}/${file}`, width, height, alt };
}

/** 18 slots: [0..14] = “More florals” grid, [15..17] = second review row only. */
export const weddingPhotos: WeddingPhoto[] = [
  photo(
    "01-bride-field-ground-florals.jpg",
    682,
    1024,
    "Bride in a field with ground floral installations and bouquet, mountains behind — Flathead Valley wedding",
  ),
  photo("02-rectangular-ceremony-arch.jpg", 682, 1024, ALT_SLOT_TBD),
  photo("03-couple-veil-wildflower-field.jpg", 682, 1024, ALT_SLOT_TBD),
  photo(
    "04-bridal-bouquet-golden-hour.jpg",
    683,
    1024,
    "Bride and groom at golden hour; lush peach, orange, and cream garden bouquet in foreground",
  ),
  photo(
    "05-bride-bridesmaids-bouquets.jpg",
    1024,
    683,
    "Bride with four bridesmaids holding coordinated peach, cream, and white organic bouquets by a lodge",
  ),
  photo("06-western-mountain-bouquet.jpg", 686, 1024, ALT_SLOT_TBD),
  photo("07-bride-burgundy-bouquet.jpg", 678, 1024, ALT_SLOT_TBD),
  photo("08-ceremony-ground-installations.jpg", 679, 1024, ALT_SLOT_TBD),
  photo("09-bouquet-and-boutonniere.jpg", 1024, 679, ALT_SLOT_TBD),
  photo("10-reception-table-centerpiece.jpg", 679, 1024, ALT_SLOT_TBD),
  photo("11-garden-bouquet-couple.jpg", 686, 1024, ALT_SLOT_TBD),
  photo("12-couple-floral-dog-collars.jpg", 1024, 682, ALT_SLOT_TBD),
  photo("13-wedding-party-mountain-field.jpg", 1024, 683, ALT_SLOT_TBD),
  photo("14-bride-river-yellow-bouquet.jpg", 682, 1024, ALT_SLOT_TBD),
  photo(
    "15-broken-arch-floral-pillars.jpg",
    682,
    1024,
    "Two lush floral pillars framing a ceremony space, coral and yellow blooms with blue accents, mountains beyond a fence",
  ),
  photo("16-bride-bridesmaids-lodge.jpg", 1024, 683, ALT_SLOT_TBD),
  photo("17-couple-golden-hour-bouquet.jpg", 683, 1024, ALT_SLOT_TBD),
  photo(
    "18-sweetheart-table-ground-florals.jpg",
    679,
    1024,
    "Overhead view of couple at sweetheart table with ground floral installation of pink, peach, and lavender blooms on the lawn",
  ),
];

/** First review strip (left → right): pillars, then river bride. */
export const reviewStripTop: [WeddingPhoto, WeddingPhoto] = [
  weddingPhotos[14]!,
  weddingPhotos[13]!,
];

/** Second review strip (left → right): lodge wide, golden hour couple, overhead table. */
export const reviewStripBottom: [WeddingPhoto, WeddingPhoto, WeddingPhoto] = [
  weddingPhotos[15]!,
  weddingPhotos[16]!,
  weddingPhotos[17]!,
];

/** Home page — “What we do” section image. */
export const homeWeddingPhoto = weddingPhotos[0]!;
