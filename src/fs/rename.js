import fs from "fs";

const rename = async () => {
  if (
    !fs.existsSync("files/properFilename.md") &&
    fs.existsSync("files/wrongFilename.txt")
  ) {
    fs.rename("files/wrongFilename.txt", "files/properFilename.md", (err) => {
      if (err) {
        throw "FS operation failed";
      }
    });
  } else {
    throw "FS operation failed";
  }
};

await rename();
