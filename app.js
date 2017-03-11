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
		console.log("Note created");
		notes.logNote(note);
	} else {
		console.log("Note title taken.");
	}
} else if (command === "list") {
	notes.getAll();
} else if (command === "read") {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log("Note read");
		notes.logNote(note);
	} else {
		console.log("Note with given title doesn't exist");
	}

} else if (command === "remove") {
	var removed = notes.removeNote(argv.title);
	var message = removed ? "Note is removed" : "No note with given title";
	console.log(message);
} else {
	console.log("Command not recognized");
}