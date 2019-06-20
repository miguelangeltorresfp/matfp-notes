# GASTBY.JS GUIDE

* Install Gatsby Command Line - `npm install --global gatsby-cli`

* Install Starter Site

  * `gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]`
  * `gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world`

  * STOP THE SERVER - CTRL + C

* `cd hello-world`

* Launch local server for development - `gatsby develop`
  * `gatsby develop --host=0.0.0.0`

* Build the site - `gatsby build`

* To install a plugin - First, you install the plugin’s NPM package and second, you add the plugin to your site’s gatsby-config.js.

* Install Typography
  1 - Install plugins - `npm install --save gatsby-plugin-typography react-typography typography`
  2 - Create a file at the root of your project folder named `gatsby-config.js` and import plugin.
  3 - Install Typography Theme - `npm install --save typography-theme-bootstrap typography-theme-lawton`
  4 - Import Typography Theme in `src/utils/typography.js` custom file

