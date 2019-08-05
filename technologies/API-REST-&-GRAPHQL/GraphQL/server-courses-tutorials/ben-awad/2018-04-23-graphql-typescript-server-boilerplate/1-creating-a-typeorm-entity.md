# GraphQL Typescript Server Boilerplate - Part 1 - Creating a TypeORM Entity

## Create a User entity column in TypeORM

* Use an uuid id instead a numerical one in order to hide the numbers o items on a table
  * `yarn add uuid`
  * And the types definitions: `yarn add -D @types/uuid`
  * In the tslint.json file we have to set this field to false: 
    `"no-submodule-imports": false`
  * Indicamos el tipo varchar para poner un límite al número de caracteres, en el caso del campo password no es necesario porque va encriptada

```bash
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryColumn
} from "typeorm";
import uuidv4 from "uuid/v4";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("text")
  password: string;

  @BeforeInsert()
  addId() {
    this.id = uuidv4();
  }
}
```

## Create an independent file to the schema.graphql and use a library to import it

`yarn add graphql-import`

```bash
import { GraphQLServer } from "graphql-yoga";

const typeDefs = importSchema("schema.graphql");
```

* And create a mutation for create an user

```bash
type Mutation {
  register(email: String!, password: String!): Boolean
}
```

## Install GQL2TS as a dev dependency

* Sirve para crear types definitions partiendo del esquema de graphql
* Cada vez que se añade algo a schema.graphql hay que ejecutar `yarn gen-schema-types`

`yarn add D gql2ts`

## Create also a separate file to the resolvers

## We create an interface para el objeto resolvers

```bash
export interface ResolverMap {
  [key: string]: {
    [key: string]: (parent: any, args: any, context: {}, info: any) => any;
  };
}
```
