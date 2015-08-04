@echo off
for /F "usebackq tokens=1,2 delims==" %%i in (`wmic os get LocalDateTime /VALUE 2^>NUL`) do if '.%%i.'=='.LocalDateTime.' set ldt=%%j
set timestamp=%ldt:~0,4%-%ldt:~4,2%-%ldt:~6,2%-%ldt:~8,2%-%ldt:~10,2%-%ldt:~12,2%
echo %timestamp%
curl http://www.massdot.state.ma.us/feeds/qmaticxml/qmaticXML.aspx > .\%timestamp%.xml