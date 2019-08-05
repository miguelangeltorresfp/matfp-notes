# RESOLVER GIT PULL CONFLICTS

## How do I force “git pull” to overwrite local files? - [LINK](https://stackoverflow.com/questions/1125968/how-do-i-force-git-pull-to-overwrite-local-files)

* First do a commit of your changes

```bash
 git add *
 git commit -a -m "local file server commit message"
 ```

* Then fetch the changes and overwrite if there is a conflict

```bash
 git fetch origin master
 git merge -s recursive -X theirs origin/master
 ```
