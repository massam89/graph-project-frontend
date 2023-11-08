const { exec } = require('child_process');

const automate = function () {

// Command to execute 'git pull' in the repository directory
const gitPullCommand = `git pull`;

// Command to execute 'npm install' in the repository directory
const npmInstallCommand = `npm install`;

// Command to execute 'npm run build' in the repository directory
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
}

module.exports = automate


