import fs from "fs";

const read = async () => {
  fs.readFile('files/fileToRead.txt', "utf8", (err, data) => {
    if (err) {
      throw "FS operation failed";
    }
    console.log(data)
  });
};

await read();
