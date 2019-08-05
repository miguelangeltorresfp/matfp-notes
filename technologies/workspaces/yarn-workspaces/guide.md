# YARN WORKSPACES

* Setting Up a React Native Web Monorepo - Ben Awad Tutorial - [LINK](https://www.youtube.com/watch?v=m5sf3LNhvc0&list=PLN3n1USn4xll9wq0rw0ECrO0j2PFzuXtn&index=3)

1- En el archivo package.json hay que poner:

```bash
{
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
```

2- Borrar las dependendias que estuvieran instaladas anteriormente:
`rm -rf packages/*/node_modules`