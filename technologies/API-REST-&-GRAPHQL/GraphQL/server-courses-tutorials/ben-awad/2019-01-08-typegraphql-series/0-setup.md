# TYPE GRAPHQL SERIES -  PART 0 - SETUP

* `yarn init -y`

* Install dependencies - `yarn add apollo-server-express express graphql reflect-metadata type-graphql`

* Install dev dependencies - `yarn add -D @types/express @types/graphql @types/node ts-node-dev typescript`

* Add tsconfig.json - `tsc --init`
  * Copy tsconfig.json from `https://github.com/benawad/monorepo-boilerplate/blob/master/packages/server/tsconfig.json`
  * Remove monorepo reference

* Create `src/index.ts`

* Create a basic apollo ( express ) graphql server with a "hello world" resolver