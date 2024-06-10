import fs from "fs";

export function walkSync(dir: string): string[] {
  const dirs: string[] = [];
  const dirEnts = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of dirEnts) {
    if (dirent.isDirectory()) {
      dirs.push(dirent.name);
    }
  }
  return dirs;
}
