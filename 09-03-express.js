/**
 * Project: Working with Data and APIs in JavaScript
 * Filename: 09-03-express.js
 * Course: 01 The Coding Train -- Working with Data and APIs in JavaScript
 * Description: 01 The Coding Train -- Working with Data and APIs in JavaScript- 09 Server-side with Node.js
 * Directory: D:\04 Work\03 Training Course\59 JavaScript\01 The Coding Train -- Working with Data and APIs in JavaScript
 * Reference Link: https://www.youtube.com/watch?v=wxbQP1LMZsw&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=9
 * Repository: N/A
 * 
 * Author: Yugo Gautomo
 * Status: Final February 01, 2022
 */

// 00 variable declaration and clear the console
const express = require('express');
const app = express();
const port = 3000;

// console.clear();

// express app listening on port 3000
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

// express app serving static file on folder 'public'
// app.use(express.static('public'));                                                // default index.html
app.use(express.static('public', { index: '09-03-helloworld-link.html' }));       // default '09-03-helloworld-link.html'

// express app running on port 3000 with HTTP method GET and route '/'- return "Hello World!"
app.get('/', (req, res) => {
  res.send("Hello World!");
});

/* -------------------- */
/* Running Command */
// node 09-03-express.js
// node ./58-codingtrain-javascript-api/09-03-express.js

/* Installation Steps */
/* Installation Steps */
// 01 create package.json and project library
// npm init
//   - package name: (58-codingtrain-javascript-api)
//   - version: (1.0.0)
//   - description: Course: 01 The Coding Train -- Working with Data and APIs in JavaScript
//   - entry point: (09-02-express.js)
//   - test command:
//   - git repository: (https://github.com/ygautomo/58-codingtrain-javascript-api-ps.git)
//   - keywords: api
//   - author: Yugo Gautomo
//   - license: (ISC)
//   - Is this OK? (yes)
//
// 02 download and install express library
// npm install express

// Setup, create symbolic link 09-03-helloworld.html to public directory
// cd public
// ln -s ../09-03-helloworld.html 09-03-helloworld-link.html

/* References: */
// - Express.js (https://expressjs.com)
// - Express.js, Hello World Example (https://expressjs.com/en/starter/hello-world.html)
// - Express.js, Serving Static Files in Express (https://expressjs.com/en/starter/static-files.html)

// ----------
/* Test Command: */
// Endpoint on port 3000 with HTTP method
// [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:3000`
// [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:3000/09-03-helloworld-link.html`

// Test HTTP server status with method- return API status
// Web `http://{{IP_ADDRESS}}:3000`
// Postman [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:3000`                  // Postman 12 Codingtrain Javascript API -- 09-03-express
// curl [-X GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:3000`

// Troubleshooting
// Error: listen EADDRINUSE: address already in use :::3000
// lsof -i tcp:3000
// kill -9 {{PID}}
