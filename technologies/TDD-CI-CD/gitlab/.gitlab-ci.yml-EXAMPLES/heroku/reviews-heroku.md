# How to create review apps in Heroku from Gitlab

[LINK](https://gitlab.com/snippets/1716930)

* Script to start review scripts
[LINK](https://gitlab.com/snippets/1720360)
`curl -X POST https://api.heroku.com/apps -H "Accept: application/vnd.heroku+json; version=3" -H "Authorization: Bearer $HEROKU_API_KEY" -H "Content-Type: application/json" -d "{\"name\":\"$CI_PROJECT_NAME-$CI_COMMIT_REF_SLUG\",\"region\":\"eu\"}"`

```bash
image: node:latest

# This folder is cached between builds
# http://docs.gitlab.com/ce/ci/yaml/README.html#cache
cache:
  paths:
  - node_modules/

stages:
  - test
  - review
  - deploy

start_review:
  stage: review
  script: 
    - chmod u+x ./start_review_scripts.bash
    - ./start_review_scripts.bash
  environment:
    name: review/$CI_BUILD_REF_NAME
    url: https://$PROJECT_NAME-$CI_COMMIT_REF_SLUG.herokuapp.com/
    on_stop: stop_review
  only:
    - branches
  except:
    - master
    
stop_review:
  stage: review
  variables:
    GIT_STRATEGY: none
  script: 
    - >-
        curl 
        -X DELETE 
        https://api.heroku.com/apps/$PROJECT_NAME-$CI_COMMIT_REF_SLUG 
        -H "Content-Type: application/json" 
        -H "Accept: application/vnd.heroku+json; version=3" 
        -H "Authorization: Bearer $HEROKU_API_KEY"
  when: manual
  environment:
    name: review/$CI_BUILD_REF_NAME
    action: stop
  only:
    - branches
  except:
    - master
  
test:
  stage: test
  script: 
    - npm install
    - npm install -g mocha
    - npm test

deploy_staging:
  stage: deploy
  script:
    - npm install
    - npm install -g mocha
    - npm test
    - git push https://heroku:$HEROKU_API_KEY@git.heroku.com/$HEROKU_STAGING_APP_NAME.git master
  environment:
    name: staging
    url: $HEROKU_STAGING_URL
  only:
  - master

deploy_prod:
  stage: deploy
  script:
    - npm install
    - npm install -g mocha
    - npm test
    - git push https://heroku:$HEROKU_API_KEY@git.heroku.com/$HEROKU_PRODUCTION_APP_NAME.git master
    - chmod u+x notify-sentry-of-release.bash
    - ./notify-sentry-of-release.bash
  environment:
    name: production
    url: $HEROKU_PRODUCTION_URL
  when: manual
  only:
  - master
```