Vue.js started pack for .Net Core 2.1
=====================================

This is a simple single-page application that demonstrate how to use .Net Core with Vue.js, WebPack and Typescript

Originally based on [Microsoft TypeScript Vue starter](https://github.com/Microsoft/TypeScript-Vue-Starter)

Features included:
* Typescript 2.9
* Webpack 4
* Bootstrap 4
* Vue 2
* Bootstrap-vue

Building
========

Linux/Mac users should run the following commands:

1. ```npm install``` to restore NPM packages
2. ```npm run rebuild-prod``` to build the frontend application using Webpack
    * You can also issue ```npm run rebuild-dev``` but then you will have to use the Development Env NetCore startup(see below)
3. ```dotnet build``` to build the C# code

[Be aware, that you should also obtain latest .Net Core SDK](https://www.microsoft.com/net/download/linux-package-manager/ubuntu18-04/sdk-current)

Windows users should either issue the same commands in Powershell/CMD or use Visual Studio 2017

For VS users, the following extensions are highly recommended:
* Vue.js Pack 2017
* NPM Task Runner
* WebPack Task Runner

IMPORTANT note to Visual Studio users
--------
For VS extensions to work you must use external Node.js and NPM, which you can obtain [here](https://nodejs.org)

You must also disable included Node tools in VS.

To do so, open the following tab in VS:

```Tools -> Options -> Projects and Solutions -> Web Package Management```

and uncheck the ```$(VSINSTALLDIR)\Web\External``` button


Running
=======

Either issue ```dotnet run```(for ex. if you are using Linux) or use the Visual Studio debugger as usual

If you are using the development build of the front-end application, then you should set up the development env for ASP.Net Core before starting the application:
* (PowerShell) ```$env:ASPNETCORE_ENVIRONMENT='Development'; dotnet run --no-launch-profile```
* (Bash) ```export ASPNETCORE_ENVIRONMENT='Development'; dotnet run --no-launch-profile```