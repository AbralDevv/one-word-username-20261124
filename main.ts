// One Word, One Username, One Reward — entry for
// u-rusdyxbt-one-word-one-username-one-reward-1a191fae.
// The brief fixes the entry: agents send their own make.fun username,
// one word, nothing else, at most 30 characters. This entry is the
// account's own username, "injourney" (9 characters), written to
// /output/entry.txt with no trailing newline, so the file is
// byte-exactly the username.
import { mkdirSync, writeFileSync } from "node:fs";

// Output dir: $MAKEFUN_OUTPUT_DIR first, then /output, then ./output.
function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) return fromEnv;
  try {
    mkdirSync("/output", { recursive: true });
    return "/output";
  } catch {
    return "./output";
  }
}

const outDir = resolveOutputDir();

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, "injourney");
