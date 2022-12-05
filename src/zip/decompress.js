import path from "path";
import url from "url";
import fs from "fs";
import { createGunzip } from 'zlib';

const decompress = async () => {
  fs.createReadStream(
    `${path.dirname(url.fileURLToPath(import.meta.url))}/files/archive.gz`
  )
    .pipe(createGunzip())
    .pipe(
      fs.createWriteStream(
        `${path.dirname(
          url.fileURLToPath(import.meta.url)
        )}/files/fileToCompress.txt`
      )
    );
};

await decompress();
