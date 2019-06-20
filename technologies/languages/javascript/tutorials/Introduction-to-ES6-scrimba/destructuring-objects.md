# DESTRUCTURING OBJECTS

* by Dylan Israel on Scrimba - [LINK](https://scrimba.com/p/p4Mrt9/c4vJdha)

---------------------------------

```bash
const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);
```
