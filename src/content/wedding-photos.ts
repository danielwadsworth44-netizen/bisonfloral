/**
 * Wedding images live in: public/images/weddings/
 *
 * Why this file exists (and why “match the images I sent in chat” isn’t automatic):
 * — Uploads in a thread are not stored as files on your machine with stable names I can read.
 * — I never see your Lightroom/export filenames unless they’re in the repo.
 * — So the workflow for any site is: drop files into the folder, then set `file` below to match
 *   each filename exactly (any names you want). Order in this array controls collage + strips.
 *
 * Collage uses the first 15 entries. Entries 16–18 are only used in the second review strip.
 * Home page “What we do” image = first entry.
 */

const dir = "/images/weddings";

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
  photo("01-bride-field-ground-florals.jpg", 682, 1024, "Bride in a field with five large ground floral installations and matching bouquet, mountains behind"),
  photo("02-rectangular-ceremony-arch.jpg", 682, 1024, "Full rectangular wedding arch covered in dahlias, roses, and hydrangeas on a lawn with valley view"),
  photo("03-couple-veil-wildflower-field.jpg", 682, 1024, "Bride and groom under a long veil in a wildflower field; bride holds a soft pastel bouquet"),
  photo("04-bridal-bouquet-golden-hour.jpg", 683, 1024, "Bride and groom at golden hour; lush peach, orange, and cream garden bouquet in foreground"),
  photo("05-bride-bridesmaids-bouquets.jpg", 1024, 683, "Bride with four bridesmaids holding coordinated peach, cream, and white organic bouquets by a lodge"),
  photo("06-western-mountain-bouquet.jpg", 686, 1024, "Western-style couple in mountain meadow; bride holds cream, mauve, and burgundy bouquet with long ribbon"),
  photo("07-bride-burgundy-bouquet.jpg", 678, 1024, "Bride seated outdoors in lace gown and veil holding a burgundy, pink, and white bouquet"),
  photo("08-ceremony-ground-installations.jpg", 679, 1024, "Outdoor ceremony with ground-level floral clusters, hydrangeas and dahlias, misty mountain backdrop"),
  photo("09-bouquet-and-boutonniere.jpg", 1024, 679, "Close-up of bridal bouquet with pink dahlias and peach blooms beside groom boutonniere"),
  photo("10-reception-table-centerpiece.jpg", 679, 1024, "Wedding table with blue and white chinoiserie plates and centerpiece of white roses and blue hydrangeas"),
  photo("11-garden-bouquet-couple.jpg", 686, 1024, "Couple holding a vibrant peach, coral, and yellow garden bouquet; groom in sage green suit"),
  photo("12-couple-floral-dog-collars.jpg", 1024, 682, "Bride and groom with two golden retrievers wearing floral wreath collars; blush and white bouquet"),
  photo("13-wedding-party-mountain-field.jpg", 1024, 683, "Full wedding party in a field with peach and yellow bouquets, dusty blue dresses, mountain trees behind"),
  photo("14-bride-river-yellow-bouquet.jpg", 682, 1024, "Bride with a vibrant yellow, orange, and white bouquet with silk ribbons, river and evergreens behind"),
  photo("15-broken-arch-floral-pillars.jpg", 682, 1024, "Two lush floral pillars framing a ceremony space, coral and yellow blooms with blue accents, mountains beyond a fence"),
  photo("16-bride-bridesmaids-lodge.jpg", 1024, 683, "Bride and four bridesmaids with peach, cream, and white bouquets in front of a wooden mountain lodge"),
  photo("17-couple-golden-hour-bouquet.jpg", 683, 1024, "Bride and groom at golden hour; bride smiles at camera with a lush peach and cream garden bouquet"),
  photo("18-sweetheart-table-ground-florals.jpg", 679, 1024, "Overhead view of couple at sweetheart table with ground floral installation of pink, peach, and lavender blooms on the lawn"),
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
