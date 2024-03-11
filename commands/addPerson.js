const Conf = require('conf')
const conf = new Conf({ projectName: 'family-tree-cli' });

const chalk = require("chalk");

function addPerson(name) {
  const people = conf.get("people") || {};
  people[name] = { name, relationships: {} };
  conf.set("people", people);
  console.log(chalk.green(`${name} added to the family`));
}

module.exports= addPerson