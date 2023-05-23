import slugifyLib from "slugify";

export function slugify(source: string): string {
  slugifyLib.extend({ [`/`]: `-`, [`+`]: `plus` });
  return slugifyLib(source).toLowerCase();
}
