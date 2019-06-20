# How to setup CI on GitLab using Docker

[LINK](https://medium.com/free-code-camp/how-to-setup-ci-on-gitlab-using-docker-66e1e04dcdc2)

```bash
stages:
  - lint-css
  - lint-js
  - unit-test

image: node:6.11.2


lint css:
  stage: lint-css
  before_script:
    - npm install
  cache:
    untracked: true
  only:
    - master
  script:
    - ./node_modules/gulp/bin/gulp.js lint-css

lint js:
  stage: lint-js
  cache:
    untracked: true
    policy: pull
  only:
    - master
  script:
    - ./node_modules/gulp/bin/gulp.js lint-js

run unit test:
  stage: unit-test
  cache:
    untracked: true
    policy: pull
  only:
    - master
  script:
    - ./node_modules/gulp/bin/gulp.js test
```