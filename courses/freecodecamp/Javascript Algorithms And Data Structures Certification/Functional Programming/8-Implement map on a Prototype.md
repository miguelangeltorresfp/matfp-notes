# Implement map on a Prototype

```bash
// the global Array
var s = [23, 65, 98, 5];
console.log('hola 1');

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  this.forEach(item => newArray.push(callback(item)));
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});

console.log('hola 2');
console.log(s);
console.log(new_s);
```
