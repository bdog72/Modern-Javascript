/* global document */

const notes = [
  {
    title: 'my next trip',
    body: 'I would like to go to Spain',
  },
  {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.',
  },
  {
    title: 'Office modification',
    body: 'Get a new seat',
  },
];

const filters = {
  searchText: '',
};

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

  filteredNotes.forEach((note) => {
    const noteEl = document.createElement('p');
    noteEl.textContent = note.title;
    document.querySelector('#notes').appendChild(noteEl);
  });
};

document.querySelector('#notes').innerHTML = '';

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', () => {
  console.log('You clicked create');
});

document.querySelector('#remove-all').addEventListener('click', () => {
  document.querySelectorAll('.note').forEach((note) => {
    note.remove();
  });
});

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});
