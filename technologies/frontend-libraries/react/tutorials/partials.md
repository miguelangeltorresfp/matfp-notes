# PARTIALS

* Typescript Partial of What? - [LINK](https://medium.com/@ole.ersoy/typescript-partial-of-what-9a557200b147)

```bash
interface Product {
   name: string;
   description: string;
}
let currentProduct: Product = {
   name: "FS2000",
   description: "Hippie Control"
};
function update1(product: Product) {
   Object.assign(currentProduct, product);
}
function update2(product: Partial<Product>) {
    Object.assign(currentProduct, product);
}
update1({name: "FSLight"}); // shows error
update2({name: "FSLight"}); // 
```