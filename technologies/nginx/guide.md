# NGINX GUIDE

## Good tutorial - [LINK](https://www.devdungeon.com/content/nginx-tutorial)

- Start nginx - `nginx`

```sh
# Start nginx
# -p is the workspace directory
# -c is the config file
./nginx -p /home/dano/nginx_workspace -c my.conf

# Stop nginx with `-s stop` flag
# Must specify the prefix/workspace dir so it knows
# which nginx instance to start/stop
./nginx -p /home/dano/nginx_workspace -c my.conf -s stop
```