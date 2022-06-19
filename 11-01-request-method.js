/**
 * Project: Working with Data and APIs in JavaScript
 * Filename: 11-01-request-method.js
 * Course: 01 The Coding Train -- Working with Data and APIs in JavaScript
 * Description: 01 The Coding Train -- Working with Data and APIs in JavaScript- 11 HTTP Post Request with fetch()
 * Directory: D:\04 Work\03 Training Course\59 JavaScript\01 The Coding Train -- Working with Data and APIs in JavaScript
 * Reference Link: https://www.youtube.com/watch?v=Kw5tC5nQMRY&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=11
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

// express app running on port 3000 with HTTP method GET and route '/'- return "GET request to the homepage"
app.get('/', (req, res) => {
  res.send("GET request to the homepage");
});

// express app running on port 3000 with HTTP method POST and route '/'- return "POST request to the homepage"
app.post('/', (req, res) => {
  res.send("POST request to the homepage");
});

// express app running on port 3000 with HTTP method GET and route '/about'- return "GET request to the homepage"
app.get('/about', (req, res) => {
  res.send("GET request on route about to the homepage");
});

// express app running on port 3000 with HTTP method POST and route '/about'- return "POST request to the homepage"
app.post('/about', (req, res) => {
  res.send("POST request route about to the homepage");
});

/* -------------------- */
/* Running Command */
// node 11-01-request-method.js
// node ./58-codingtrain-javascript-api/11-01-request-method.js

// Setup, create symbolic link 09-03-helloworld.html to public directory
// cd public
// ln -s ../09-03-helloworld.html 09-03-helloworld-link.html

/* References: */
// - Express.js (https://expressjs.com)
// - Express.js, express.json() (https://expressjs.com/en/4x/api.html#express.json)
// - Express.js, Hello World Example (https://expressjs.com/en/starter/hello-world.html)
// - Express.js, Serving Static Files in Express (https://expressjs.com/en/starter/static-files.html)
// - Mozilla Developer Network (MDN), References, Web APIs, Fetch API, Using the Fetch API (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
// - Mozilla Developer Network (MDN), References, Web APIs, Geolocation API (https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
// - Mozilla Developer Network (MDN), References, Web APIs, Request, Request.method (https://developer.mozilla.org/en-US/docs/Web/API/Request/method)
// - Node.js v18.3.0 Documentation, File System (https://nodejs.org/api/fs.html)

// ----------
/* Test Command: */
// Endpoint on port 3000 with HTTP method
// [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:3000`
// [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:3000/about`

// Test HTTP server status with method- return API status
// Web `http://{{IP_ADDRESS}}:3000`
// Postman [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:3000`     // Postman 11 01-functionHelloWorld
// curl [-X GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:3000`

// Troubleshooting
// Error: listen EADDRINUSE: address already in use :::3000
// lsof -i tcp:3000
// kill -9 {{PID}}
