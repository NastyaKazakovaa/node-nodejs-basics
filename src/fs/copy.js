import fs from "fs";
import path from "path";

const copy = async () => {
  if (!fs.existsSync("files_copy") && fs.existsSync("files")) {
    fs.mkdirSync("files_copy");

    fs.readdirSync("files").forEach((file) => {
      fs.copyFileSync(path.join("files", file), path.join("files_copy", file));
    });
  } else {
    throw "FS operation failed";
  }
};

await copy();
