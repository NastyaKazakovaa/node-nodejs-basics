import path from "path";
import url from "url";
import fs from "fs";
import { createGzip } from "zlib";

const compress = async () => {
  fs.createReadStream(
    `${path.dirname(
      url.fileURLToPath(import.meta.url)
    )}/files/fileToCompress.txt`
  )
    .pipe(createGzip())
    .pipe(
      fs.createWriteStream(
        `${path.dirname(url.fileURLToPath(import.meta.url))}/files/archive.gz`
      )
    );
};

await compress();
