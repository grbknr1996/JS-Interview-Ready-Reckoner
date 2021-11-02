process.stdout.write("Hello world");
let name = process.argv[2];
console.log("\n" + name);

process.stdin.on("data", (data) => {
  console.log(data.toString());
});
