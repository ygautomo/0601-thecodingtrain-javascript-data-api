/**
 * Project: Working with Data and APIs in JavaScript
 * Filename: 10-01-geolocation.js
 * Course: 01 The Coding Train -- Working with Data and APIs in JavaScript
 * Description: 01 The Coding Train -- Working with Data and APIs in JavaScript- 10 Geolocation Web API
 * Directory: D:\04 Work\03 Training Course\59 JavaScript\01 The Coding Train -- Working with Data and APIs in JavaScript
 * Reference Link: https://www.youtube.com/watch?v=3ls013DBcww&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=10
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
// app.use(express.static('public');                                                       // default index.html
app.use(express.static('public', { index: '10-01-geolocation-link.html' }));            // default '10-01-geolocation-link.html'
// app.use(express.static('public', { index: '10-01-geolocation-mapbox-link.html' }));     // default '10-01-geolocation-link.html'
// app.use(express.static('public', { index: '10-01-geolocation-osm-link.html' }));        // default '10-01-geolocation-link.html'

// express app running on port 3000 with HTTP method GET and route '/'- return "Hello World!"
app.get('/', (req, res) => {
  res.send("Hello World!");
});

/* -------------------- */
/* Running Command */
// node 10-01-geolocation.js
// node ./58-codingtrain-javascript-api/10-01-geolocation.js

// Setup, create symbolic link 10-01-geolocation.html, 10-01-geolocation-mapbox.html and 10-01-geolocation-osm.html to public directory
// cd public
// ln -s ../10-01-geolocation.html 10-01-geolocation-link.html
// ln -s ../10-01-geolocation-mapbox.html 10-01-geolocation-mapbox-link.html
// ln -s ../10-01-geolocation-osm.html 10-01-geolocation-osm-link.html

/* References: */
// - Express.js (https://expressjs.com)
// - Express.js, Hello World Example (https://expressjs.com/en/starter/hello-world.html)
// - Express.js, Serving Static Files in Express (https://expressjs.com/en/starter/static-files.html)
// - Mozilla Developer Network (MDN), References, Web APIs, Geolocation API (https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

// ----------
/* Test Command: */
// Endpoint on port 3000 with HTTP method
// [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:3000`
// [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:3000/10-01-geolocation.html`

// Test HTTP server status with method- return API status
// Web `http://{{IP_ADDRESS}}:3000`
// Postman [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:3000`                        // Postman 11 01-functionHelloWorld
// curl [-X GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:3000`

// Troubleshooting
// Error: listen EADDRINUSE: address already in use :::3000
// lsof -i tcp:3000
// kill -9 {{PID}}
