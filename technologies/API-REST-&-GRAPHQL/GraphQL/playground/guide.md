# PRISMA GRAPHQL PLAYGROUND

* How to run authenticated query or mutation in GraphQL Playground? - [LINK](https://github.com/LawJolla/prisma-auth0-example/issues/3)

```bash
{
  "Authorization": "Bearer <JWT>"
}
```

```bash
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNzUxZjIxZTJjNTA4NGRjNGU5ZTczNyIsImlhdCI6MTU2OTk5NDMzMCwiZXhwIjoxNTcyNTg2MzMwfQ.JZIJNf31oHLsOBLTDvSlhMJUXMjW6QoEztTL8zjCFz8"
}
```

* Query variables

```bash
query($id:ID!){
    userprofile(id:$id){
      firstName
  }
}

{"id":"5d5eb3268850e04fac806be9"}
```

* En Strapi, en playground, hay que pasar el objeto where entero con la variable slug incluida en este objeto
  [link](https://github.com/strapi/strapi/issues/3537)

```bash
query getUserBySlug($where: JSON!) {
  userprofiles(where: $where) {
    firstName
    slug
  }
}

{"where": { "slug":"miguelangeltorresfp"}}
```
