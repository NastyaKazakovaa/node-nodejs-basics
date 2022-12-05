import fs from "fs";


const remove = async () => {
  if (fs.existsSync("files/fileToRemove.txt")) {
    fs.unlinkSync("files/fileToRemove.txt");
  } else {
    throw "FS operation failed";
  }
};

await remove();
