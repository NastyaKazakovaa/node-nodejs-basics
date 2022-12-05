import { createReadStream } from "fs";
import path from "path";
import url from "url";

const read = async () => {
  const stream = createReadStream(
    `${path.dirname(url.fileURLToPath(import.meta.url))}/files/fileToRead.txt`,
    {
      encoding: "utf8",
    }
  );

  stream
    .on("error", (err) => {
      console.log(err);
      stream.destroy();
    })
    .pipe(process.stdout);
};

await read();
