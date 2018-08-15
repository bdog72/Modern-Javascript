const myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

const bio = {
  name: 'Brian',
  age: 46,
  location: 'Saint Petersburg',
};

console.log(`${bio.name} is ${bio.age} and lives in ${bio.location}`);
bio.age = 47;

console.log(`${bio.name} is ${bio.age} and lives in ${bio.location}`);
