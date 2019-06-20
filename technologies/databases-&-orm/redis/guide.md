# REDIS ON WINDOWS

## How to Install and Use the Linux Bash Shell on Windows 10 - [LINK](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

## Running Redis on Windows 10 – Part I of III - [LINK](https://redislabs.com/blog/redis-on-windows-10/)

## How to Get Redis-cli Without Installing Redis Server (even on Windows)
 * redis-cli - [LINK](https://redislabs.com/blog/get-redis-cli-without-installing-redis-server/)

* Iniciar Ubuntu ( sobre WSL, no vale meter la contraseña con copy paste, es la misma de LastPass ) y luego:
  *  `sudo service redis-server start`
  *  `sudo service redis-server stop`

* Haciendo del video-tutorial ( Udemy Course ) de Stephen Grieder sobre docker, docker-compose, AWS & Kubernetes, aprendí a usar redis dentro de un container.
  - docker run redis
  - docker exec -it <container-id> redis-cli
  - docker exec -it <container-id> sh
