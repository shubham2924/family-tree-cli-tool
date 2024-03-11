const Conf = require('conf')
const conf = new Conf({ projectName: 'family-tree-cli' });

const chalk = require("chalk");

function connectRelation(name1, name2, relationship) {
    const people = conf.get("people") || {};
    if (people[name2]) {
      const person = people[name2];
      if (!person.relationships[relationship]) {
        person.relationships[relationship] = [];
      }
      if (!person.relationships[relationship].includes(name1)) {
        person.relationships[relationship].push(name1);
        conf.set("people", people);
        console.log(
          chalk.green(`Connected ${name1} as ${relationship} of ${name2}`)
        );
      } else {
        console.log(chalk.yellow(`Relationship ${relationship} already added`));
      }
    } else {
      console.log(chalk.red(`${name2} not found`));
    }
  }

module.exports = connectRelation