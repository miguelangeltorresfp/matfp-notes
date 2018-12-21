# INSTALL LEMP STACK ( Nginx, MariaDB and PHP7 ) on Ubuntu 16.04 LTS 

* apt-get update -y && apt-get upgrade -y && apt-get dist-upgrade -y
* Check DNS Configuration - dig mautic.fashionbiz20.com - [LINK](https://linoxide.com/linux-how-to/install-mautic-easyengine-ubuntu-16-04/)
* Setup the name of your VPS to match your domain - [LINK](https://linoxide.com/linux-how-to/install-mautic-easyengine-ubuntu-16-04/)

  ```bash
  ssh root@yourserverip
  sudo -i
  cp -av /etc/hostname /etc/hostname.orig
  cp -av /etc/hosts /etc/hosts.orig
  echo "yoursitedomain.net" > /etc/hostname
  echo -e "\nyourserverip          yoursitedomain.net          yoursitedomain" >> /etc/hosts
  hostname yoursitedomain.net
   ```
