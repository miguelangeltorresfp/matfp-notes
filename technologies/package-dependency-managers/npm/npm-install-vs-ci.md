# NPM INSTALL vs NPM CI

* What is the difference between “npm install” and “npm ci”? - [LINK](https://stackoverflow.com/questions/52499617/what-is-the-difference-between-npm-install-and-npm-ci)

## npm install

Installs a package and all its dependencies.
Dependencies are driven by npm-shrinkwrap.json and package-lock.json (in that order).
without arguments: installs dependencies of a local module.
Can install global packages.
Will install any missing dependencies in node_modules.
It may write to package.json or package-lock.json.
When used with an argument (npm i packagename) it may write to package.json to add or update the dependency.
when used without arguments, (npm i) it may write to package-lock.json to lock down the version of some dependencies if they are not already in this file.

## npm ci

Requires at least npm v5.7.1.
Requires package-lock.json or npm-shrinkwrap.json to be present.
Throws an error if dependencies from these two files don't match package.json.
Removes node_modules and install all dependencies at once.
It never writes to package.json or package-lock.json.
