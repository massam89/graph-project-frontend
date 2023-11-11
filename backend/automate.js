const { exec } = require("child_process");

const automate = function () {

  const gitPullCommand = `git pull`;
  const npmInstallCommand = `npm install`;
  const npmRunBuildCommand = `npm run build`;

  // Run 'git pull'
  exec(gitPullCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing 'git pull': ${error}`);
      return;
    }
    console.log(`'git pull' output: ${stdout}`);

    // Run 'npm install'
    exec(npmInstallCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing 'npm install': ${error}`);
        return;
      }
      console.log(`'npm install' output: ${stdout}`);

      // Run 'npm run build'
      exec(npmRunBuildCommand, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing 'npm run build': ${error}`);
          return;
        }
        console.log(`'npm run build' output: ${stdout}`);
      });
    });
  });
};

module.exports = automate;
