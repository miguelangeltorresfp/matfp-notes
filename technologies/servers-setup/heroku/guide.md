# HEROKU GUIDE

## INSTALL HEROKU CLI

* Añadir el path para Git Bash - [LINK](https://stackoverflow.com/questions/33908177/installing-heroku-toolbelt-on-windows-10)
  Nombre de la variable por ejemplo HEROKU :
  `"$PATH:/c/Program\ Files/Heroku/bin"`
* Para CMD - `C:\Program Files\Heroku\bin;%PATH%.`

## DEPLOY

* `heroku apps:create fashionbiz20-strapi --region eu`
* `git remote -v`
* `git push heroku master`

## Using ssh

* Add Keys: `heroku keys:add`
* `heroku apps:create --ssh-git fashionbiz20-strapi --region eu`
* `heroku apps:create --ssh-git ecommfashion --region eu`

* Always use ssh: `git config --global url.ssh://git@heroku.com/.insteadOf https://git.heroku.com/`
* Remove this settings: `git config --global --remove-section url.ssh://git@heroku.com/`

## MANAGING

* `heroku apps:info`

## LOG

* `heroku logs -n 1000 --tail`

* Log para cualquier aplicación incluso dentro de un contenedor - `heroku logs -a <app-name>`
