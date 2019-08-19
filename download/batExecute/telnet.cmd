set ip=127.0.0.1
set port=8080
start telnet.exe %ip% %port%
tasklist|findstr /i "telnet.exe" > nul
if ERRORLEVEL 1 (goto err) else (goto ok)

:err
tasklist|findstr -i "portmap.exe"
if ERRORLEVEL 1 (start "" "D:\PortMap1.6\PortMap.exe") else (taskkill /F -IM PortMap.exe & start "" "D:\PortMap1.6\PortMap.exe")

:ok
taskkill /F -IM "telnet.exe" >> nul
echo PortMap Services is running %Date:~0,4%-%Date:~5,2%-%Date:~8,2% %Time:~0,2%:%Time:~3,2%