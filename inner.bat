@echo off
set "ScDir=../../templates"
cd /d "%ScDir%"
for /f  "delims=" %%a in ('dir /a-d /s /b *.html') do (
    echo ## -*- coding: utf-8 -*->>"%%a.html"
    type "%%a">>"%%a.html"
    move /y "%%a.html" "%%a"
)

REM cd ../static/xxx