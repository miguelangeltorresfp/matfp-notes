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

* Ejemplo pasando variable de tipo JSON - createPost

```bash
mutation($title:String, $content:JSON) {
  createPost(input:{data:{title:$title,content:$content}}) {
    post {
      id
      title
      slug
      summary
      featuredImage {
        url
      }
      content
      postcategories {
        name
        slug
      }
      userprofiles{
        username
      }
    }
  }
}

VARIABLES
{
  "content": {"data": {"username": "migue", "email": "test@gmail.com", "password": "12345678"}}
}
```

* Ejemplo createUser

```bash
mutation($input:createUserInput!) {
  createUser(input:$input){
    user{
      username
    }
  }
}

VARIABLES
{
  "input": {"data": {"username": "migue", "email": "test@gmail.com", "password": "12345678"}} 
}
```

* Ejemplo con inline fragments
  [link](https://atheros.ai/blog/how-to-query-your-schema-with-graphql-fragments)

```bash
query {
  fashionposts {
    title
    content {
      __typename ...on ComponentFashionpostProductcards {
        card{
          title
        }
      }
    }
    productcards {
      card {
        title
        slogan
        gallery {
          url
        }
      }
    }
  }
}
```