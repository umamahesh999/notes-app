console.log("Starting App");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

var command = process.argv[2];
var argv = yargs.argv;
console.log("Process: ", process.argv);
console.log("Yargs: ", argv);

console.log(process.argv);

if (command === "add") {
	notes.addNote(argv.title, argv.body);
} else if (command === "list") {
	notes.getAll();
} else if (command === "read") {
	notes.getNote(argv.title);
} else if (command === "remove") {
	notes.removeNote(argv.title);
} else {
	console.log("Command not recognized");
}