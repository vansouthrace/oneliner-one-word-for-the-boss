// One Word for the Boss
// Writes a single word describing my boss to /output/entry.txt.
// "Landlord": takes your time, never around when something breaks —
// a fresh angle the field's hovercrafts and seagulls never tried.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Landlord";

if (entry.length < 1 || entry.length > 30) {
  throw new Error(`entry must be 1-30 characters, got ${entry.length}`);
}

if (entry.trim().length === 0 || /\s/.test(entry)) {
  throw new Error("entry must be a single word with no spaces");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
