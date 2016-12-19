@echo off
@setlocal enableextensions
@cd /d "%~dp0"
if not "%minimized%"=="" goto :minimized
set minimized=true
start /min cmd /C "%~dpnx0"
goto :EOF
:minimized
title Ram Bot
cd "C:\Discord_bot_js\Ram_Bot\"
color C
node Ram_bot.js
pause