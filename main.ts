import fs from "node:fs";
const entry = "reply-all";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
