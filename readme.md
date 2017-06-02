# Micro-service Application Template
*Josh Rehman <josh@javajosh.com> 2 June 2017*


## Introduction

This repo is a micro-service template with one directory (module) per *top-level process*: 
`client`, `server`, and `db`. In this case, the client is browser/angular, server is
java/play, and db is linux/mysql. This project is buildable from the 
command-line in macOS, Windows, and Linux. 

This repo includes IntelliJ project files, but any IDE is optional, and the 
command-line will always be the *canonical* way to build.


## Building, Running, Testing

First, install the necessary tooling. Installing the required tooling is made much easier if you use a package manager. 
I suggest homebrew for macOS, chocolatey for Windows, and apt-get or rpm
for Linux. Install the Oracle JDK manually.

Each top-level process is built, run, tested separately. 

The *initial build* for these projects will take extra time and bandwidth
as they download their (copious) dependencies. Subsequent runs will be much faster.


### Run the Client (Angular)

Start a development session with `ng -o`. This command will start a persistent development server
with live-reload, and open a new default browser at [http://localhost:4200](http://localhost:4200).

Build for production with `ng -prod`, which will output to `dist/`. (Angular
includes a powerful set of tools for minimizing and tree-shaking, however even
the simplest client will be ~300kB.)

There are many other helpful `ng` commands for generating code, linting,
testing and more.

The runtime is built on JavaScript, HTML, and CSS. The build is 
built on TypeScript, Angular Template Language, and SCSS. 


### Run the Server (Play)

Start a Play Framework development session with `sbt run`.
Access with  [http://localhost:9000](http://localhost:9000).

Note: `sbt` requires access to `javac`, so put it on the path (on windows, search
for "enviroment variables" on the start menu).

### Run the DB (MySQL)



## Collaborative Development



## How this project was started

The initial commit contains the result of this recipe:

 0. Install git, yarn, sbt, and ng, plus all of their requirements. 
 1. `git init microservice`
 2. `cd microservice`
 3. `sbt new playframework/play-java-seed.g8 server`
 4. `ng new --router client`
 5. Various fiddling with IntelliJ to setup the module structure.