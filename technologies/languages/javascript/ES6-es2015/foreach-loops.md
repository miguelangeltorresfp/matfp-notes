# ES6 forEach() loops with vanilla JavaScript

[LINK](https://gomakethings.com/es6-foreach-loops-with-vanilla-javascript/)

## TheArray.forEach()

* ES6 introduced the Array.forEach() method for looping through arrays
* This method only works for arrays, not NodeLists

```bash
var sandwiches = [
 'tuna',
 'ham',
 'turkey',
 'pb&j'
];

sandwiches.forEach(function (sandwich, index) {
 console.log(index);
 console.log(sandwich);
});

// returns 0, "tuna", 1, "ham", 2, "turkey", 3, "pb&j"
```

## The NodeList.forEach() method

* The NodeList.forEach() method works just like the Array.ForEach() method, but on NodeLists.

```bash
var sandwiches = document.querySelectorAll('.sandwich');

sandwiches.forEach(function (sandwich, index) {
 console.log(sandwich); // The element
 console.log(index); // The index in the NodeList
});
```

## Skipping Items

* In a for loop, you can use continue to skip the current item and break to end the loop altogether.
* However because the forEach() methods run callback functions, you would use return to skip the current item. There is no way to break the loop completely.

```bash
var sandwiches = [
 'tuna',
 'ham',
 'turkey',
 'pb&j'
];

sandwiches.forEach(function (sandwich, index) {

 // If the sandwich is turkey, skip it
 if (sandwich === 'turkey') return;

 // Otherwise log it to the console
 console.log(sandwich);

});

// Returns "tuna", "ham", "pb&j"
```
