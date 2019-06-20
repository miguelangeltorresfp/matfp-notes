# UPDATE TRELLIS USING SUBTREES

* How to update Trellis? - [LINK](https://discourse.roots.io/t/how-to-update-trellis/10248/2)
  * ´git merge -X subtree=trellis/ --squash trellis/master --allow-unrelated-histories´

* Best practices to update Trellis - [LINK](https://discourse.roots.io/t/best-practices-to-update-trellis/5386)

```BASH
git checkout trellis
git pull
git checkout master
git merge -X subtree=trellis/ --squash trellis/master --allow-unrelated-histories
git commit -m "Updated Trellis"
git git
```

* Best way recommended by TangRufus - How did you setup your projects? - [LINK](https://github.com/roots/trellis/issues/883#issuecomment-329052189)
