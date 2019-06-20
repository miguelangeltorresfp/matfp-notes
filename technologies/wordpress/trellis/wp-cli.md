# TRELLIS WP-CLI

## DB Export

1- Navigate to your Trellis folder `$ cd example.com/trellis`
2- Run vagrant up if the VM isn’t running yet.
3- SSH to your VM $ vagrant ssh
4- Now you're connected to your vagrant VM, change directories to your web root `$ cd /srv/www/example.com/current`
5- Export your db `$ wp db export`
6- You'll find the dump file on your local machine in example.com/site
