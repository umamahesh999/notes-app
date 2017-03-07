console.log("Starting notes.js");

var addNote = (title, body) => {
	console.log("Adding new note: ", title, body);
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
