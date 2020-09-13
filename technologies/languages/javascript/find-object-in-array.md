# HOW TO CHECK IF AN ARRAY INCLUDES AN OBJECT

* [How to Check If an Array Includes an Object in JavaScript](https://www.tutorialrepublic.com/faq/how-to-check-if-an-array-includes-an-object-in-javascript.php)

```bash
<script>
    // An array of objects
    var persons = [{name: "Harry"}, {name: "Alice"}, {name: "Peter"}];

    // Find if the array contains an object by comparing the property value
    if(persons.some(person => person.name === "Peter")){
        alert("Object found inside the array.");
    } else{
        alert("Object not found.");
    }
</script>
```

* [How to determine if object is in array](https://stackoverflow.com/questions/4587061/how-to-determine-if-object-is-in-array)

* [How to determine if Javascript array contains an object with an attribute that equals a given value?](https://stackoverflow.com/questions/8217419/how-to-determine-if-javascript-array-contains-an-object-with-an-attribute-that-e)