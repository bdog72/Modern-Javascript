/* global document */

// const notes = [
//   {
//     title: 'my next trip',
//     body: 'I would like to go to Spain',
//   },
//   {
//     title: 'Habbits to work on',
//     body: 'Exercise. Eating a bit better.',
//   },
//   {
//     title: 'Office modification',
//     body: 'Get a new seat',
//   },
// ];

document.querySelector('#create-note').addEventListener('click', () => {
  console.log('You clicked create');
});

document.querySelector('#remove-all').addEventListener('click', () => {
  document.querySelectorAll('.note').forEach((note) => {
    note.remove();
  });
});
