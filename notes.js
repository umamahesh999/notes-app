console.log("Starting notes.js");

const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};

	try {
		var notesData = fs.readFileSync('notes-date.json');
		notes = JSON.parse(notesData);
	} catch (e) {

	}

	var duplicateNotes = notes.filter((note) => note.title === title);
	if (duplicateNotes.length === 0) {
		notes.push(note);
		fs.writeFileSync('notes-date.json', JSON.stringify(notes));
	}

}

var getAll = () => {
	console.log("Listing all notes");
}

var getNote = (title) => {
	console.log("Reading note with title:", title);
}

var removeNote = (title) => {
	console.log("Remove note with title:", title);
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
}
