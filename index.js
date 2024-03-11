#! /usr/bin/env node
const { program } = require('commander')
const addPerson = require('./commands/addPerson')
const addRelation = require('./commands/addRelation')
const connectRelation = require('./commands/connectRelation')
const getRelationCount = require('./commands/getRelationCount')
const getFatherName = require('./commands/getFatherName')
const clearTree = require('./commands/clearTree')

program.version("1.0.0").description("Family Tree CLI Tool");


program
    .command("add-relationship <relationship>")
    .description("Add a new relationship")
    .action(addRelation);

program
    .command("connect-relationship <name1> <name2> <relationship>")
    .description("Connect two people with a relationship, e.g for father-son relation, enter father's name then son's name & then father as a relation")
    .action(connectRelation);

program
    .command("count <name> <relationship>")
    .description("Count the number of a specific relationship for a person")
    .action(getRelationCount);

program
    .command("father-of <name>")
    .description("Get the name of the father of a person")
    .action(getFatherName);

program
    .command("clear")
    .description("Existing family tree data is removed, you may start with a new family tree")
    .action(clearTree);


program
    .command("add-person <name>")
    .description("Add a new person")
    .action(addPerson);

program.parse()