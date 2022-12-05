import { cpus } from "os";

const performCalculations = async () => {
  let num = 10;
  const workers = await Promise.allSettled(
    cpus().map(
      () =>
        new Promise((resolve, reject) => {
          const worker = new worker_threads.Worker(
            `${path.dirname(fileURLToPath(import.meta.url))}'/worker.js'`,
            { workerData: num++ }
          );
          worker.on("message", (msg) => resolve(msg));
          worker.on("error", (msg) => reject(msg));
        })
    )
  );

  workers.map(({ status, value }) =>
    console.log({
      status: status === "fulfilled" ? "resolved" : "error",
      data: status === "fulfilled" ? value : null,
    })
  );
};

await performCalculations();
