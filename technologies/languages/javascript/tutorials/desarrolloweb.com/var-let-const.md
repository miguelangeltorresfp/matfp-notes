# JAVASCRIPT LET VAR CONST

## var

* Puede ser de ámbito global o local. Para declararla de ámbito global hay que declararla fuera del cuerpo de una función. No permite declararla en un ámbito local más acotado dentro de la propia función.

* Este código

```bash
function miFuncion() {
  console.log(miVar);
  if (true) {
    var miVar = "Hola mundo";
  }
  console.log(miVar);
};
```

* Equivale a

```bash
function () {
var miVar;
  console.log(miVar);
  if (true) {
    miVar = "Hola mundo";
  }
  console.log(miVar);
};
```

* Y printa lo siguiente por pantalla:

```bash
undefined
Hola mundo
```

## let

```bash
function () {
  console.log(miVar);
  if (true) {
    let miVar = "Hola mundo";
  }
  console.log(miVar);
};
```

* printa

```bash
undefined
undefined
```

## const

```bash
const OBJ = {
  id: '01',
  name: 'David'
}
OBJ.name = 'Miguel';
console.log(OBJ.name);
```

* Imprime Miguel

## ¿Para qué usar la antigua declaración "var" a partir de ahora?

* usar "let" siempre por regla general, hasta que por su ámbito restringido no nos venga bien, y entonces pasaremos a usar "var".

