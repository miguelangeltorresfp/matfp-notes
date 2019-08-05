# BEGINNER GRAPHQL SERIES - PART 1 BASIC TYPES

* `yarn add -D node-dev`

* Link to the GraphQL Cheat Sheet - [LINK](https://github.com/sogko/graphql-schema-language-cheat-sheet)

* To pass parameters or arguments to queries you have do it with input

```bash
  input UserInfo {
    username: String!
    password: String!
    age: Int
  }
```

* Mutations run in order whereas queries run in parallel