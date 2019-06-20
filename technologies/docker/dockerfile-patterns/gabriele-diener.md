# DOCKERFILE PATTERNS

## How to build a smaller Docker image

[LINK](https://medium.com/@gdiener/how-to-build-a-smaller-docker-image-76779e18d48a)

* `docker history <image>`

* As you can see the last commands used are apt-get autoremove and apt-get clean. It’s very important to delete temporary files that do not serve the purpose of the image, such as the package manager’s cache. These files increase the size of the final image without giving any advantage. 
In Alpine OS, you can use apk --no-cache add <package> when installing a package to bypass the use of the cache.

```bash
FROM debian:stable

WORKDIR /var/www

RUN apt-get update && \
    apt-get -y --no-install-recommends install curl \
        ca-certificates && \
    curl https://raw.githubusercontent.com/gadiener/docker-images-size-benchmark/master/main.go -o main.go && \
    apt-get purge -y curl \
        ca-certificates && \
    apt-get autoremove -y && \
    apt-get clean
```

* .dockerignore example
  
```bash
.env
.editorconfig
.git
.github
.cache
*.md
LICENSE
Makefile
vendor/
```

* Chequear el tamaño de una imagen : `docker images <image> --format "{{.Repository}}:{{.Tag}} {{.Size}}"`