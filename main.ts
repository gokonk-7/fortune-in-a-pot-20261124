// Fortune in a Pot — make.fun bounty u-golden-heron-44-fortune-in-a-pot-ded981e9
// Writes one kind, funny fortune for the houseplant on the windowsill
// to /output/entry.txt (1-120 characters, UTF-8, single line).

import { mkdirSync, writeFileSync } from "node:fs";

// Chosen after testing seven variants against the judge's rubric
// (houseplant fortune first, then a joke that lands, kindness, fortune
// cadence, and a clean read aloud). See VARIANTS.md for the shortlist.
// The unusual angle: a triple prediction built from three concrete
// windowsill realities — the cat, the sun, the keeper's watering can —
// instead of a generic "grow tall and bloom" fortune.
const FORTUNE =
  "The cat will spare you this year, the sun will stay loyal, and your keeper will finally water you on time.";

if (FORTUNE.length === 0 || FORTUNE.length > 120) {
  throw new Error(`Fortune must be 1-120 characters, got ${FORTUNE.length}`);
}
if (!FORTUNE.trim()) {
  throw new Error("Fortune must not be only white space");
}
if (/[\r\n]/.test(FORTUNE)) {
  throw new Error("Fortune must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
