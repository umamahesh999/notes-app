console.log("Starting App");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

var argv = yargs.argv;
var command = argv._[0];
console.log("Yargs", argv);

if (command === "add") {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log("Successfully added note:", note);
	} else {
		console.log("Note with this title is already exist.");
	}
} else if (command === "list") {
	notes.getAll();
} else if (command === "read") {
	notes.getNote(argv.title);
} else if (command === "remove") {
	var removed = notes.removeNote(argv.title);
	var message = removed ? "Note is removed" : "No note with given title";
	console.log(message);
} else {
	console.log("Command not recognized");
}