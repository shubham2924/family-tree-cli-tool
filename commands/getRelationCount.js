const Conf = require('conf')
const conf = new Conf({ projectName: 'family-tree-cli' });

const chalk = require("chalk");

function getRelationCount(name, relationship) {
    const people = conf.get("people") || {};
    const person = people[name];
    if (person) {
      const relationshipCount = person.relationships[relationship]?.length || 0;
      console.log(
        chalk.green(`${relationshipCount} ${relationship}(s) of ${name}`)
      );
    } else {
      console.log(chalk.red(`${name} not found`));
    }
  }

module.exports= getRelationCount