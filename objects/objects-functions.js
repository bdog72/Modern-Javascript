const myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};

const otherBook = {
  title: 'A peoples history',
  author: 'Howard Zinn',
  pageCount: 723,
};

const getSummary = book => ({
  summary: `${book.title} by ${book.author}`,
  pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
});
const bookSummary = getSummary(myBook);
const otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);
console.log(otherBookSummary.pageCountSummary);

const convertFahrenheit = fahrenheit => ({
  fahrenheit,
  kelvin: (fahrenheit + 459.69) * (5 / 9),
  celsius: (fahrenheit - 32) * (5 / 9),
});
const temps = convertFahrenheit(74);
console.log(temps);
