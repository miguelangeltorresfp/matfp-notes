# GIT GUIDE

## BASICS

- git init

- git add <file\>
  Add files to the index

- git reset <file\>
  Remove files from the index

- git rm --cached <file\>
  To unstage files from the index

- git checkout -- <file\>
  To discard changes in working directory

- git diff
  View changes to files

---

## Configuring GIT the first time - [link](https://git-scm.com/book/es/v1/Empezando-Configurando-Git-por-primera-vez)

- Indentity - Global
  `$ git config --global user.name "Miguel Ángel Torres FP"`
  `$ git config --global user.username "miguelangeltorresfp"`  
  `$ git config --global user.email miguelangeltorresfp@gmail.com`

- git config --global user.name
- git config --global user.username
- git config --global user.email

---

- DEALING WITH LINE ENDINGS [link](https://help.github.com/articles/dealing-with-line-endings/)

- UNDERSTANDING Git - Data Model [link](https://hackernoon.com/https-medium-com-zspajich-understanding-git-data-model-95eb16cc99f5)

- My Git Flow - Oliver Steel | Blog [link](https://blog.osteele.com/2008/05/my-git-workflow/)

---

## Init and adding a remote

```bash
git init
git remote add origin git@gitlab.com:examplerepository
git add .
git push -u origin master
```

* Removing remote - `git remote remove origin`

---

## Visualizing branch topology

- `git log --graph --decorate online` - view the list of commits

- `gitk` - open GUI ( very old & ugly )

- `git log --graph --simplify-by-decoration` - Show first and last commit

---

## DISCARD

- `git reset HEAD^` - Undo the last commit

- `git reset --hard` - Discard all local changes to all files permanently

- `git checkout -- <file>` - Discard local changes (permanently) to a file

- `git stash` - Discard all local changes, but save them for possible re-user later

---

## BRANCHES

- Create a new branck: `git checkout -b feature_branch_name`

- List branches - `git branch -av`

---

## REMOTES

- Add remote - `git remote add origin git@github.com:miguelangeltorresfp/react-typescript-material-ui-form-tutorial.git`

- git checkout - Show the tracking information, if exists, for the current branch.

- git branch -a -vv
  All branches and tracking branches.

- git remote show {remote_name}
  See where the local branches are explicitly configured for push and pull.

- Switching remote git repositories from https to ssh
  <https://cinhtau.net/2015/07/03/switching-remote-urls-from-https-to-ssh/>
  - show current remote urls
    `git remote -v`
  - switch remote - rename
    `git remote set-url origin ssh://git@github.com/user/repository.git`

---

## TRACK REMOTES BRANCHES - [LINK](https://www.git-tower.com/learn/git/faq/track-remote-upstream-branch)

- Track an existing remote branch - `git checkout --track origin/dev` - Create a new local branch with the same name as the remote one and directly establishes a tracking connection between the two.

- Push your branch to the remote repository: `git push -u origin feature_branch_name` - track the newly created remote branch simply by using the -u flag.

- You can set or change a tracking relationship for your current HEAD branch at any time - `git branch -u origin/dev`

---

## AMEND

- `git commit --amend --no-edit`
- `git push -f`

## RELEASE

- `git tag v1.0.0`
- `git push --tags`
