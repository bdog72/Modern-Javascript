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

const sortNotes = (notes) => {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
};

const findNote = function (notes, noteTitle) {
  return notes.find((note, index) => note.title.toLowerCase() === noteTitle.toLowerCase());
};

const findNotes = function (notes, query) {
  return notes.filter((note, index) => {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

// console.log(findNotes(notes, 'eating'))

// const note = findNote(notes, 'some other office modification')
// console.log(note)

sortNotes(notes);
console.log(notes);
