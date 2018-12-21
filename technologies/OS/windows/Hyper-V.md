# Hyper-V Guide on Windows 10

* VirtualBox and Docker Won’t Run | Because of Windows 10 Hyper-V? - [LINK](https://www.systemcodegeeks.com/windows/virtualbox-docker-windows-10-hyper-v/)

  * ¡¡¡ Hay que hacerlo desde la ventana de comandos de windows - CMD con permisos de administrador !!! - y luego hay que reiniciar ( reboot )
  * `bcdedit`
  * `bcdedit /set hypervisorlaunchtype off` - to work with Virtualbox - Vagrant
  * `bcdedit /set hypervisorlaunchtype auto` - to work with Docker

* Virtualization on Windows 10 with Virtual Box, Hyper-V and Docker Containers - [LINK](https://technology.amis.nl/2017/07/17/virtualization-on-windows-10-with-virtual-box-hyper-v-and-docker-containers/)

* Opciones de la línea de comandos de BCDEdit - [LINK](https://msdn.microsoft.com/es-es/library/windows/hardware/mt450468(v=vs.85).aspx)

* Como usar el comando BCDEDIT para modificar el arranque de Windows - [LINK](https://norfipc.com/comandos/como-usar-comando-bcdedit-para-modificar-arranque-windows.html)
