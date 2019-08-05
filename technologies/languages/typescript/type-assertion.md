# TYPESCRIPT - TYPE ASSERTION

[link](https://stackoverflow.com/questions/38831342/what-does-enclosing-a-class-in-angle-brackets-mean-in-typescript)

* These are the same:

```bash
let square = <Square>{};
let square = {} as Square;
```

Example:

```bash
interface Props {
    x: number;
    y: number;
    name: string;
}

let a = {};
a.x = 3; // error: Property 'x' does not exist on type `{}`

// So you can do:

let a = {} as Props;
a.x = 3;

// Or:

let a = <Props> {};
```
