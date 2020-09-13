# Working with Git remotes and pushing to multiple Git repositories

[link](https://jigarius.com/blog/multiple-git-remote-repositories)

```bash
# Create a new remote called "origin" with the URL of the primary repo.
git remote add origin git@gitlab.com:fashionbiz20/fashionbiz20-backend.git
# Re-register the remote as a push URL.
git remote set-url --add --push origin git@gitlab.com:fashionbiz20/fashionbiz20-backend.git
# Add a push URL to a remote. This means that "git push" will also push to this git URL.
git remote set-url --add --push origin git@bitbucket.org:miguelangeltorresfp/fashionbiz20-backend.git
```