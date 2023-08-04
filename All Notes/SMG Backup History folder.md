---
dg-publish: true
---
[[SMG]] asks to access [[Sys.AWOS]] CDU's `history` folder 
	- [x] Set up history folder mapping for forecaster -[[2022-10-06 Thu]]
	- Created an extra Domain User `fileaccess` for this purpose. -[[2022-09-19 Mon]]

Download [[MS Sys Internals]] tools, and ran the command remotely to [[Forecaster]]'s workstations .
> [!NOTE] copy the script file to the workstation and run following command to map the folders
> PsExec64 \\WORKSTATION08 -u awos.miv\fileaccess -p Vailala2015 the-script-file