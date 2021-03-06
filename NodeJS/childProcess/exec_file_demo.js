const { execFile } = require("child_process");

execFile("./somefile.sh", (error, stdout, stderr) => {
  if (error) {
    console.log(`error:${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`standard error:${stderr}`);
    return;
  }
  console.log(`stdout:${stdout}`);
});
