/**
 * Project: 01 The Coding Train -- Working with Data and APIs in JavaScript
 * Filename: 05-05-p5js-linegraph-common.js
 * Course: 01 The Coding Train -- Working with Data and APIs in JavaScript
 * Description: 01 The Coding Train -- Working with Data and APIs in JavaScript- 05 Graphing with p5.js- Line Graph- Example
 * Directory: D:\06 Training Course\06 JavaScript\01 The Coding Train -- Working with Data and APIs in JavaScript
 * Reference Link: https://www.youtube.com/watch?v=5-ptp9tRApM&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=5
 * Repository: N/A
 * 
 * Author: Yugo Gautomo
 * Status: Final August 01, 2022
 */

// 00 variable declaration and clear the console
// console.clear();

const CANVAS_WIDTH = 1500;
const CANVAS_HEIGHT = 1000;

const GRAPH_ORIGINX = 100;
const GRAPH_ORIGINY = 100;
const GRAPH_WIDTH = 1200;
const GRAPH_HEIGHT = 800;

const ARROWW = 5;
const ARROWL = 15;

const AXESLEN = 700;

const HASHMARKL = 5;
const PADDINGX = 20;
const PADDINGY = 45;

let tableData
let numRows
let numColumns
let time
let ratings
let title
let colors
let highlightColor

const fileCSV = '05-presidents.csv';      // data source https://github.com/hanjoes/hanjoes.github.io/blob/master/vis/assignments/assignment2/presidents.csv

// 01 p5.js structure function preload()
function preload() {
  tableData = loadTable(fileCSV, 'csv', 'header');
};

// 02 p5.js structure function setup()
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  // noLoop();

  numRows = tableData.getRowCount();
  numColumns = tableData.getColumnCount();
  time = tableData.getColumn("time");
  ratings = tableData.getColumn("rating");

  title = "Presidents Rating (100 high) from 1924 to 1974";

  colors = [
    color(50, 70, 117),
    color(67, 103, 186),
    color(84, 129, 235),
    color(140, 175, 255)
  ];

  highlightColor = color(150, 82, 217);
};

// 03 p5.js structure function draw()
function draw() {
  background(255);
  drawGraph();
};

// Graph axes related stuff
// 04 function drawAxes()
function drawAxes() {
  // noFill();
  stroke(51);
  fill(255);
  beginShape();
  vertex(GRAPH_ORIGINX, GRAPH_ORIGINY);
  vertex(GRAPH_ORIGINX, GRAPH_ORIGINY + GRAPH_HEIGHT);
  vertex(GRAPH_ORIGINX + GRAPH_WIDTH, GRAPH_ORIGINY + GRAPH_HEIGHT);
  endShape();

  drawArrows();
  drawHashMarks();
};

// 05 function drawArrows()
function drawArrows() {
  fill(51);
  // arrow for y axis
  beginShape(TRIANGLES);
  vertex(GRAPH_ORIGINX, GRAPH_ORIGINY);
  vertex(GRAPH_ORIGINX - ARROWW, GRAPH_ORIGINY + ARROWL);
  vertex(GRAPH_ORIGINX + ARROWW, GRAPH_ORIGINY + ARROWL);
  endShape();

  // arrow for x axis
  beginShape(TRIANGLES);
  vertex(GRAPH_ORIGINX + GRAPH_WIDTH, GRAPH_ORIGINY + GRAPH_HEIGHT);
  vertex(GRAPH_ORIGINX + GRAPH_WIDTH - ARROWL, GRAPH_ORIGINY + GRAPH_HEIGHT - ARROWW);
  vertex(GRAPH_ORIGINX + GRAPH_WIDTH  - ARROWL, GRAPH_ORIGINY + GRAPH_HEIGHT + ARROWW);
  endShape();
};

// 06 function drawHashMarks()
function drawHashMarks() {
  drawHashMarksForYAxes();
  drawHashMarksForXAxes();
};

/* Running Command */
// Visual Studio Code Extension -- Live Server- 05-05-p5js-linegraph.html

/* Data Sources: */
// R Documentation, Datasets, Quarterly Approval Ratings of US Presidents (https://rdrr.io/r/datasets/presidents.html)

/* Libraries:*/
// p5.js (https://p5js.org)

/* References: */
// Hanzhou Shi, Blog (https://hanjoes.github.io/blog)
// Hanzhou Shi, GitHub (https://github.com/hanjoes/hanjoes.github.io)
// Mozilla Developer Network (MDN), Guides, JavaScript — Dynamic client-side scripting, Asynchronous JavaScript (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
// Mozilla Developer Network (MDN), References, CSS, white-space (https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
// Mozilla Developer Network (MDN), References, Web APIs, Fetch API (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
// p5.js, Editor (https://editor.p5js.org)
// p5.js, Get Started (https://p5js.org/get-started)
// p5.js, Reference (https://p5js.org/reference)
// p5.js, Wiki (https://github.com/processing/p5.js/wiki/Global-and-instance-mode)
