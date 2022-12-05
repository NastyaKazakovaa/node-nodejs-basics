const transform = async () => {
  process.stdin.setEncoding("utf-8").on("data", (chunk) => {
    process.stdout
      .setEncoding("utf-8")
      .write(Array.from(chunk).reverse().join("").trim() + "\n");
  });
};

await transform();
