import fs from "fs";

const create = async () => {
  if (fs.existsSync("files/fresh.txt")) {
    throw "FS operation failed";
  } else {
    fs.writeFile("files/fresh.txt", "I am fresh and young", "utf8", (err) => {
      throw err
    });
  }
};

await create();
