# INSTALL METEOR ON WINDOWS

* Add meteor to the path [LINK](https://stackoverflow.com/questions/31839012/installing-meteor-on-windows-10)


This is how I got the command to work.

The following steps, resolved the issue.

Set the SYSTEM Environment Variable to:

C:\Users\%username%\AppData\Local\.meteor

Or if you prefer, change to your username explicitly

C:\Users\rich\AppData\Local\.meteor

Then as per the accepted answer on this question.

Create a file named meteor in the directory where the meteor.bat is. E.g. the path above.

Hint, you can use

touch meteor

Copy these lines into the file and save

```bash
#!/bin/sh
cmd //c "$0.bat" "$@"
```
