# Code for [Backend Course | NodeJS ExpressJS PostgreSQL Prisma & Docker](https://youtu.be/9BD9eK9VqXA)

## What I learned

### Chapter 1 - Theory

### Chapter 2 - Basic Backend Project

- Node.js is a runtime environment for JavaScript.
- To use npm ecosystem. the project needs to be initiated as node npm project
  (`npm init -y`, -y: use defaults, not asking questions). This creates
  *package.json* file (project descriptor, containing name, version etc). The
  concept of npm project seems similar to the concept of Gradle project.
- Express is a web framework for Node.js.
- To use Express the content of the package needs to be assigned to a
  variable/const (`const express = require('express')`). This line includes the
  content of *express* package to the code.
- *package.json* also contains *scripts* section. Scripts are run using
  `npm run {script_name}` command. The problem of running *node* in a script is
  that it doesn't support code hot swap. *nodemon* package supports it. Using
  *nodemon* requires installing the package as a *dev dependency*. *nodemon*
  cannot be run as a system command, it's only an npm package and can be used
  only in the npm ecosystem.
- Adding a package in *devDependencies* section instead of *dependencies* causes
  the dependency to not be included in the production package. *nodemon* makes
  a lot of modifications to the end code, so it should be a dev dependency
  (`npm install --save-dev {package}`). *nodemon* is a **Quality of Live** package.
- `app.use(express.json)` is required to correctly handle JSON HTTP payloads.
  This adds a new **middleware** to the application. *express.json* is a
  predefined one. The concept of middlewares seems similar to the concept of
  *Filter Chain* in Spring.
- The convenient way of sending responses in express is
  `res.status(200).send('data')`.
