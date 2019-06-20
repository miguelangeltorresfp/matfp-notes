# TRELLIS VAULT & SECURITY

* SALT & PASSWORDS - Clarify vault.yml – vault_users - > salt: “generateme” - [LINK](https://discourse.roots.io/t/clarify-vault-yml-vault-users-salt-generateme/7341)

  * Password can be whatever.
  Salt can be whatever, so long as you have the update from roots/trellis#629 130
  You may generate the salt any way you wish. However, only the first 16 chars will be used and any characters not in the regexp range [./a-zA-Z0-9] will be replaced with x.

1 - Las contraseñas se generan online en : - [LINK](https://www.random.org/passwords/?num=1&len=24&format=html&rnd=new)

2 - Las contraseñas salt : [LINK](https://roots.io/salts.html)

## ENCRIPTAR ARCHIVOS DE CONTRASEÑAS

1 - El archivo vault_pass con la contraseña para encriptar los demás archivos se puede guardar sin más en el directorio raiz del proyecto. Asegurarse de que no se incluye en el control de versiones.

2 - Se incluye en el archivo ansible.cfg : `vault_password_file = .vault_pass`

3 - Se conecta con la máquina virtual mediante ssh : `vagrant ssh`

4 - Se entra en el directorio de Trellis : `cd trellis`

5 - Se ejecuta el comando de encriptación de Ansible :
  `ansible-vault encrypt group_vars/all/vault.yml group_vars/development/vault.yml group_vars/staging/vault.yml group_vars/production/vault.yml`

6 - Se crea un archivo `.git/hooks/pre-commit` para que nos avise si vamos a hacer un commit por error con un archivo vault no encriptado - [LINK](https://reinteractive.com/posts/167-ansible-real-life-good-practices)
