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

### Chapter 3 - NodeJS & SQLite Backend

- *.env* file is a convenient way of maintaining environment variable for local
  run, both in Java and JS projects.
- In Node exctracting environment variables is easy: `process.env.PORT`.
- *public* is a canonical directory for serving static content. The dir name is
  a convention, it can be any other name as well. `express.static()` tells the
  application where to find the public directory.
- To allow something (constant, function) to be accessible in different files in
  the project, it needs to be exported. When we export something in one file, it
  can be imported into another. Import name doesn't have to match the exported name.
- If we distribute our endpoints across different files in the project, we have
  to use `express.Router()`, assign it to a var/const and export. It needs to be
  imported in the app file and used as following: `app.use('/auth', authRoute)`.
- In express path params are provided in following format: `/:id`.
- JSON request body can be deconstructed: `const {username, password} = req.body`.
- JS provides convenient way of dealing with DB prepared statements:
  `const a = db.prepare('SELECT ...'); a.get('username')`.
- Authentication middleware (custom) can be capable of adding `req.userId`
  (not `req.body.userId`).
- The course suggests providing JWT token in the requesst using *Authorization*
  header.
- In the solution, in authRoutes, user ID is encoded within the token using
  secret, so it's possible to decode it using the same secret in the auth middleware.
- The ID of the entry inserted into DB can be obtained using `result.lastInsertRowID`.
  `result` is a returned value of `stmt.run()`.
