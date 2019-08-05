# BEGINNER GRAPHQL SERIES - PART 3 HOW GRAPHQL SUBSCRIPTIONS WORK

* First we create de type definition:

```bash
const typeDefs = gql`
  type Subscription {
    newUser: User!
  }
`;
```

* And we can trigger an event using PubSub from Apollo Server.
We have to pass the pubsub instance to the context:

```bash
const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res, pubsub })
});
```

* Then we have to create a subscription in the resolver using the subscribe function which receive 4 parameters:

```bash
const resolvers = {
  Subscription: {
    newUser: {
      subscribe: (parent, args, context) => {}
    }
  }
}
```

```bash
const NEW_USER = "NEW_USER";

const resolvers = {
  Subscription: {
    newUser: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_USER)
    }
  }
}
```

* Then we trigger the event using another resolver:

```bash
const resolvers = {
  Mutation: {
    register: (_, { userInfo: { username } }, { pubsub }) => {
      const user = {
        id: 1,
        username
      };
      pubsub.publish(NEW_USER, { newUser: user });
      return {
        errors: [{ field: "username", message: "bad" }],
        user
      };
    }
  }
};
```