# Refactor Global Variables Out of Functions

```bash
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one
function add (bookList,bookName) {
return [...bookList, bookName];
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one
function remove (bookList,bookName) {
  return bookList.filter(name => name !== bookName);
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log('bookList: ' + bookList);
console.log('');
console.log('newBookList: ' + newBookList);
console.log('');
console.log('newerBookList: ' + newerBookList);
console.log('');
console.log('newestBookList: ' + newestBookList);
```
