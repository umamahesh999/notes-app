const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const title = {
		describe: "Title of note",
		demand: true,
		alias: "t"
	}
const body = {
		describe: "Body of note",
		demand: true,
		alias: "b"
	}

const argv = yargs
			.command('add', 'Add a new note', {
				title,
				body
			})
			.command('list', 'List all notes')
			.command('read', 'Read individual note', {
				title
			})
			.command('remove', 'Remove individual note', {
				title
			})
			.help()
			.argv;
var command = argv._[0];

if (command === "add") {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log("Note created");
		notes.logNote(note);
	} else {
		console.log("Note title taken.");
	}
} else if (command === "list") {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s)`);
	allNotes.forEach((note) => notes.logNote(note));
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