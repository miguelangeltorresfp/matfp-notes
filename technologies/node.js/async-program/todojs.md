# Controlar la ejecución asíncrona

* [LINK](https://www.todojs.com/controlar-la-ejecucion-asincrona/)

* Este es un ejemplo de implementación breve y concisa para ejecutar repetidas veces una función de forma secuencial o paralela (depende del true/false del último parámetro) sobre un conjunto de valores:

```bash
"use strict";

function forEachAll(data, each, finish, sync) {
    var n = -1, result = [];
    var next = sync ?
        function () {
            if (++n < data.length) { each(data[n], result, next); }
            else if (finish)       { finish(result); }
        } :
        (function () {
            function completed() {
                if (++n >= data.length && finish) { finish(result); }
            }
            for (var i = 0; i < data.length; i++) { each(data[i], result, completed); }
            return completed;
        }());
    next();
}

function asyncSqrt(value, callback) {
    console.log('START execution with value =', value);
    setTimeout(function() {
        callback(value, value * value);
    }, 0 | Math.random() * 100);
}

forEachAll([0,1,2,3,4,5,6,7,8,9],
    function(value, allresult, next) {
        asyncSqrt(value, function(value, result) {
            console.log('END execution with value =', value, 'and result =', result);
            allresult.push({value: value, result: result});
            next();
        });

    },
    function(allresult) {
        console.log('COMPLETED');
        console.log(allresult);
    },
    true
);
```
