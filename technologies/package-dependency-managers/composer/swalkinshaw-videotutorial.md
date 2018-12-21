# Scott Walkinshaw VideoTutorial

1 Download packages from <https://packagist.org/>
2 Retrofitting a Legacy Project

* Delete vendor directory ( from git index too )
* Create a composer.json file
* Add vendor directory to .gitignore
* Update autoloader - `require_once 'path/to/vendor/autoloader.php';`

3 Define your own repository:

```bash
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/Seldaek/monolog.git"
    }
  ],
  "require": {
    "monolog/monolog": "1.6.0"
  }
}
```

4 Define your own package :

```bash
{
  "repositories": [
    {
      "type": "package",
      "package": {
        "name": "wordpress/wordpress",
        "version": "3.6",
        "dist": {
          "url": "https://github.com/Wordpress/Wordpress/archive/3.6.zip",
          "type": "zip"
        }
      }
    }
  ],
  "require": {
    "wordpress/wordpress": "3.6"
  }
}
```

5 Custom Installers - Based on the dependency type is installed on a different path

```bash
{
  "repositories": [
    {
      "type": "package",
      "package": {
        "type": "webroot",
        "name": "wordpress/wordpress",
        "version": "3.6",
        "source": {
          "type": "git",
          "url": "https://github.com/Wordpress/Wordpress/archive/3.6.zip",
          "reference": "3.5.1"
        },
        "require": {
          "fancyguy/webroot-installer": "1.0.0"
        }
      }
    }
  ],
  "require": {
    "wordpress/wordpress": "3.6"
  },
  "extra": {
    "webroot-dir": "wp",
    "webroot-package": "wordpress/wordpress"
  }
}
```

6 Install Wordpress in wp directory

* Mover index.php y wp-config.php al directorio raiz y actualizar las rutas en los dos archivos.
  * Incluir los path a Custom Content Directory ( app ) - en el vídeo los busca en el repo Skeleton
* Mover el directorio wp-content también al directorio raiz.
* Renombrar wp-content a simplemente app
* Ya en el panel de administración de Wordpress hay que quitar wp de la url del sitio en General Settings - Site Address(URL)

7 Convertir en un repositorio

* `git init`
* `git add .gitignore`
* Añadir a .gitignore el directorio vendor y wp

8 Manage plugins - WORDPRESS PACKAGIST - wpackagist.org

* Manually add plugins to the require section in composer.json
* Using composer require - `composer require robo47/r47Twitter`
* For wordpress we need install plugins in plugins directory
  * Use wpackagist.org because plugins in there use wordpress installer in order to install plugins in the propper directory
  * Hay que añadir el repositorio a composer.json
  * Añadir app/plugins al archivo .gitignore

```bash
{
  "repositories": [
    {
      "type": "composer",
      "url": "http://wpackagist.org"
    },
  ],
  "require": {
    "wpackagist/advanced-custom-fields":"*"
  },
  "extra": {
    "installer-paths": {
      "app/plugins/{$name}/": ["type:wordpress-plugin"]
    },
    "webroot-dir": "wp",
    "webroot-package": "wordpress/wordpress",
  }
    ...
}
```

9 Plugins that aren't in the wpackagist.org repository - OWN PLUGINS

* Whitelist our plugin in .gitignore - `!app/plugins/custom-plugin`
