import { createReadStream } from "fs";
import path from "path";
import url from "url";

const write = async () => {
  const stream = createReadStream(
    `${path.dirname(url.fileURLToPath(import.meta.url))}/files/fileToWrite.txt`,
    {
      encoding: "utf8",
    }
  );

  process.stdin.pipe(stream).on("error", (err) => {
    console.log(err);
    stream.destroy();
  });
};

await write();
