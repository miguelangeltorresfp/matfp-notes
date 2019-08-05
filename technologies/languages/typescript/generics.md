# TYPESCRIPT - GENERICS

[link](https://stackoverflow.com/questions/48337555/confusion-about-angle-brackets-in-typescript?noredirect=1&lq=1)

```bash
function myFn<T>(param: T): T {
  return param;
}

let identity = myFn<string>("hello world");
```
