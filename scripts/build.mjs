import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await cp(join(root, "index.html"), join(dist, "index.html"));
await cp(join(root, "src"), join(dist, "src"), { recursive: true });
await cp(join(root, "public"), join(dist, "public"), { recursive: true });

const assetVersion = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 12) || Date.now().toString();
const versionedFiles = [
  join(dist, "index.html"),
  join(dist, "src", "main.js"),
  join(dist, "src", "components.js"),
];

await Promise.all(
  versionedFiles.map(async (file) => {
    const source = await readFile(file, "utf8");
    await writeFile(file, source.replace(/\?v=[^"')]+/g, `?v=${assetVersion}`));
  })
);
