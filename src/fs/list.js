import fs from "fs";


const list = async () => {
  if (fs.existsSync("files")) {
    console.log(fs.readdirSync("files"));
  } else {
    throw "FS operation failed";
  }
};

await list();
