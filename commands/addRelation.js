const Conf = require('conf')
const conf = new Conf({ projectName: 'family-tree-cli' });

const chalk = require("chalk");

function addRelation(relationship) {
    const people = conf.get("people") || {};
    for (const name in people) {
      if (!people[name].relationships) {
        people[name].relationships = {};
      }
      people[name].relationships[relationship] = [];
    }
    conf.set("people", people);
    console.log(chalk.yellow(`${relationship} added as a relationship`));
  }

module.exports = addRelation