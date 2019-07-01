# OBJECT LITERAL

* by Dylan Israel on Scrimba - [LINK](https://scrimba.com/p/p4Mrt9/c4vJdha)

---------------------------------

* OLD WAY

```bash
function addressMaker(city, state) {
    const newAddress = {newCity: city, newState: state};
    console.log(newAddress);
}

addressMaker('Austin', 'Texas');
```

* NEW WAY

```bash
function addressMaker(city, state) {
    const newAddress = {city, state};
    console.log(newAddress);
}

addressMaker('Austin', 'Texas');
```
