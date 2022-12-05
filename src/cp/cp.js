import { fork } from "child_process";
import path from "path";
import url from "url";

const spawnChildProcess = async (args) => {
  const child = fork(
    `${path.dirname(url.fileURLToPath(import.meta.url))}/files/script.js`,
    args,
    { silent: true }
  );

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess(process.argv);
