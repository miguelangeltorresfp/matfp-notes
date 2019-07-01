# VAGRANT GUIDE

* To start the virtual machine: vagrant up
* To stop the virtual machine: vagrant halt

* To restart the virtual machine: vagrant reload
  * The equivalent of running a halt followed by an up.

* To resume the virtual machine: vagrant resume
* Tu suspend the virtual machine: vagrant suspend

* Provision - `vagrant reload --provision`
* Provision VM with specific tags to only run relevant roles - `SKIP_GALAXY=true ANSIBLE_TAGS=wordpress vagrant reload --provision`
