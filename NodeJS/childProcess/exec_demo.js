const { exec } = require("child_process");
exec("ls -lh", (error, stdout, stderr) => {
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
exec("pwd", (error, stdout, stderr) => {
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
