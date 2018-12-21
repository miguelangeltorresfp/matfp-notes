# LANDO GUIDE

* Install Local Certificate - [LINK](https://stackoverflow.com/questions/24611640/curl-60-ssl-certificate-unable-to-get-local-issuer-certificate)
  1 - download certificate - <https://curl.haxx.se/ca/cacert.pem>
  2 - add this line to php.ini - curl.cainfo = "/C:/Users/migue/cacert/cacert.pem"

* VIDEO TUTORIAL OFFICIAL GUIDE - [LINK](https://www.youtube.com/watch?v=QW3io3MFPNg)
  1 - lando init - create .yml
  2 - lando start - starts app
  3 - lando wp core download --path=web - downlad wordpress
  4 - lando info - Tell all the information about the site

* curl: (60) SSL certificate problem: unable to get local issuer certificate - [LINK](https://github.com/lando/lando/issues/1071)
