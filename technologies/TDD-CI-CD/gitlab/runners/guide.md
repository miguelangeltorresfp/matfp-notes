# RUNNERS GUIDE

- INSTALL [LINK](https://docs.gitlab.com/runner/install/windows.html)

- REGISTER - [LINK](https://docs.gitlab.com/runner/register/index.html)

- COMMANDS - [LINK](https://docs.gitlab.com/runner/commands/)

- How to set-up a CI/CD environment on Gitlab using NodeJs
  [LINK](https://dev.to/6thcode/how-to-set-up-a-cicd-environment-on-gitlab-using-nodejs-jh3)

```bash
gitlab-runner install
gitlab-runner start
gitlab-runner status
gitlab-runner verify
```

Hay que modificar el archivo config.toml para poder ejecutar docker in docker.
DinD - Cannot connect to the Docker daemon. Is the docker daemon running on this host?
[LINK](https://gitlab.com/gitlab-org/gitlab-runner/issues/1986)

```bash
privileged = true
cache_dir = "cache"
```
