const Conf = require('conf')
const conf = new Conf({ projectName: 'family-tree-cli' });

const chalk = require("chalk");

function clearTree() {
    conf.clear();
    console.log(chalk.yellow("Cleared all data from storage"));
}

module.exports= clearTree