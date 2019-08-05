# BEGINNER GRAPHQL SERIES - PART 2 HOW GRAPHQL RESOLVERS WORK

## They can receive four arguments: (parent, args, context, info)

### args

```bash
const resolvers = {
  Query: {
    hello: (parent, { name }) => `hello world ${name}`,
    user: () => ({ id: 1, username: "bob" })
  },
  Mutation: {
    login: (parent, { userInfo: { username } }, context, info) => {
      return username;
    },
    register: () => ({
      errors: [{ field: "username", message: "bad" }],
      user: { id: 1, username: "bob" }
    })
  }
};
```

### context

* You have access to it across all of your resolvers and it's created in the declaration of Apollo Server. It can be used to send cookies.

```bash
const resolvers = {
  Query: {
    hello: (parent, { name }) => `hello world ${name}`,
    user: () => ({ id: 1, username: "bob" })
  },
  Mutation: {
    login: (parent, { userInfo: { username } }, context, info) => {
      console.log(context);
      context.res.cookies("");
      return username;
    },
    register: () => ({
      errors: [{ field: "username", message: "bad" }],
      user: { id: 1, username: "bob" }
    })
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res })
});

server.listen().then(({ url }) => console.log(`Server started at ${url}`));
```

* Resolver can be asynchronouse and graphql can resolve the promise

### info

* It's not useful at first.

### parent

* you can also resolve individual field, for example: