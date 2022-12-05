const parseArgs = () => {
  for (let i = 0; i <= process.argv.length; i += 2) {
    if (process.argv[i].includes("--")) {
      console.log(
        process.argv[i].replace("--", "", " is ", process.argv[i + 1])
      );
    }
  }
};

parseArgs();
