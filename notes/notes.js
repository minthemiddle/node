console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var readNote = (title) => {
    console.log('Read note', title);
}

var deleteNote = (title) => {
    console.log('Delete note', title);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    deleteNote
}; 