import fs from "fs";
import { createHash } from "node:crypto";

const calculateHash = async () => {
  fs.readFile("./files/fileToCalculateHashFor.txt", "utf8", (err, data) => {
    const hashedData = createHash("sha256").update(data).digest("hex");
    console.log(hashedData);
  });
};

await calculateHash();
