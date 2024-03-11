const Conf = require('conf')
const conf = new Conf({ projectName: 'family-tree-cli' });

const chalk = require("chalk");

function getFatherName(name) {
    const people = conf.get("people") || {};
    const person = people[name];
    if(!person){
        console.log(chalk.red(`${name} not found`));
    }
    else{
        if (person.relationships["father"]) {
            const fatherName = person.relationships["father"][0];
        
            if (fatherName) {
              console.log(chalk.green(`${fatherName} is the father of ${name}`));
            } else {
              console.log(chalk.red(`No father found for ${name}`));
            }
          } else {
            console.log(chalk.red(`Entry for ${name}'s father not found`));
          }
    }
  }

module.exports= getFatherName