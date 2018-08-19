/* global localStorage */

// Read existing notes from localstorage

/* eslint-disable */
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  }
  return [];
};

// Save the notes to localStorage
const saveNotes = notes => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

// Generate the DOM structure for a note
const generateNoteDom = note => {
  const noteEl = document.createElement('div');
  const textEl = document.createElement('span');
  const button = document.createElement('button');

  // Setup the note remove button
  button.textContent = 'x';
  noteEl.appendChild(button);

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unnamed note';
  }

  noteEl.appendChild(textEl);
  return noteEl;
};

// Render application notes
const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase()),
  );

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(note => {
    const noteEl = generateNoteDom(note);

    document.querySelector('#notes').appendChild(noteEl);
  });
};
