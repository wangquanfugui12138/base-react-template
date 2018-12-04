REM 向ScDir下的所有html文件头部插入一行## -*- coding: utf-8 -*->>
@echo off
set "ScDir=../../templates"
cd /d "%ScDir%"
for /f  "delims=" %%a in ('dir /a-d /s /b *.html') do (
    echo ## -*- coding: utf-8 -*->>"%%a.html"
    type "%%a">>"%%a.html"
    move /y "%%a.html" "%%a"
)
REM 插入完成后需要切回原来的目录下 路径根据ScDir决定
cd ../static/xxx