# RUNNERS ON WINDOWS 10

* Hay que ejecutar powershell como administrador

* Para registrar un nuevo runner : `gitlab-runner register`

* Se ejecuta para reiniciar los runners `gitlab-runner restart`

* Se verifica qué runners se están ejecutando con `gitlab-runner verify`

* Más comandos en : [LINK](https://docs.gitlab.com/runner/commands/#gitlab-runner-start)

* Se configuran usando el archivo `C:\Gitlab-Runner\config.toml` [LINK](https://gitlab.com/gitlab-org/gitlab-runner/blob/master/docs/configuration/advanced-configuration.md)

* Lo ideal es tener dos runners, uno que use docker como executor y otro shell: [LINK](https://www.adictosaltrabajo.com/2018/04/10/primeros-pasos-con-gitlab-ci/)