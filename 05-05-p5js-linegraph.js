/**
 * Project: 01 The Coding Train -- Working with Data and APIs in JavaScript
 * Filename: 05-05-p5js-linegraph.js
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

const DEFAULT_RADIAN = 10
let points = []

// 01 function drawGraph()
function drawGraph() {
  drawAxes();
  drawPoints();
  drawLegends();
  drawTitle();
};

// 02 function drawHashMarksForYAxes()
function drawHashMarksForYAxes() {
  let numHashMarks = 100;
  let hashMarkL = GRAPH_ORIGINX
  let hashMarkR = hashMarkL + HASHMARKL;
  let dist = (GRAPH_HEIGHT - PADDINGY) / numHashMarks;
  for (let i = 1; i <= numHashMarks; ++i) {
    let hashMarkY = GRAPH_ORIGINY + GRAPH_HEIGHT - (i * dist);
    if (i % 10 == 0) {
      drawTextForYHashMarkAtY(hashMarkY, hashMarkR, i.toString());
      stroke(51);
      line(hashMarkL, hashMarkY, hashMarkR, hashMarkY);
    };
  };
  // attribute name for y axis
  drawTextForYHashMarkAtY(GRAPH_ORIGINY, hashMarkR, "rating");
};

// 03 function drawHashMarksForXAxes()
function drawHashMarksForXAxes() {
  let numHashMarks = numRows;
  let dist = GRAPH_WIDTH - 2 * PADDINGX;
  let unitDist = dist / numHashMarks;
  let startX = GRAPH_ORIGINX + PADDINGX;
  let hashMarkB = GRAPH_ORIGINY + GRAPH_HEIGHT - 1;
  let hashMarkU = hashMarkB - HASHMARKL;
  for (let i = 0; i < numHashMarks; ++i) {
    let hashMarkX = startX + (i * unitDist);

    if (i % 4 == 0) {
      stroke(51);
      line(hashMarkX, hashMarkB + HASHMARKL, hashMarkX, hashMarkB);
      push();
      let x = hashMarkX
      let y = hashMarkB + 5
      translate(x, y);
      rotate(PI / 4);
      drawTextForXHashMark(0, 0, time[i]);
      pop();
    };
  };

  // attribute name for x axis
  let x = GRAPH_ORIGINX + GRAPH_WIDTH;
  let y = GRAPH_ORIGINY + GRAPH_HEIGHT;
  drawTextForXHashMark(x, y, "year");
};

// 04 function drawTextForYHashMarkAtY()
function drawTextForYHashMarkAtY(hashMarkY, hashMarkL, str) {
  let len = str.length * 10;
  let height = 15;
  let padding = 10;
  let x = hashMarkL - padding - len;
  let y = hashMarkY - height / 2;

  textAlign(RIGHT);
  text(str, x, y, len, height);
};

// 05 function drawTextForXHashMark()
function drawTextForXHashMark(x, y, str) {
  let len = str.length * 10;
  let height = 15;

  text(str, x, y, len, height);
};

// 05 function drawPoints()
function drawPoints() {
  let distY = (GRAPH_HEIGHT - PADDINGY) / 100;
  let distX = (GRAPH_WIDTH - 2 * PADDINGX) / numRows;

  let startX = GRAPH_ORIGINX + PADDINGX;
  let previousX;
  let previousY;

  // we do this in two passes in order for the points not overrlapped
  // by the lines.
  for (let i = 0; i < numRows; ++i) {
    let val = ratings[i];
    let x = startX + (i * distX);
    let y = GRAPH_ORIGINY +GRAPH_HEIGHT - parseFloat(val) * distY;
    let color = getColorForBar(i % 4, x, y, DEFAULT_RADIAN, val);

    if (i > 0) {
      stroke(100);
      line(previousX, previousY, x, y);
    };

    // record
    points.push({x: x, y: y, r: DEFAULT_RADIAN, color: color});
    previousX = x;
    previousY = y;
  };

  points.forEach(function drawPoint(p) {
    fill(p.color);
    noStroke();
    ellipse(p.x, p.y, p.r, p.r);
  });
};

// 06 function getColorForBar()
function getColorForBar(index, x, y, r, val) {
  if (mouseX > x - r && mouseX < x + r && mouseY > y - r && mouseY < y + r) {
    drawToolTipForVal(val, x, y, r);
    return highlightColor;
  };
  return colors[index];
};

// 07 function drawToolTipForVal()
function drawToolTipForVal(val, x, y, w) {
  fill(51);
  noStroke();
  textStyle(NORMAL);
  textAlign(CENTER);
  text(val, x, y - 20, w, 100);
};

// 08 function drawLegends()
function drawLegends() {
  // for the containing box
  let width = 80;
  let height = 100;
  let x = GRAPH_ORIGINX + GRAPH_WIDTH - width;
  let y = GRAPH_ORIGINY;

  noFill();
  stroke(51);
  rect(x, y, width, height);

  // for contained boxes
  let padding = 10;
  let boxL = 15;
  let gap = (height - 2 * padding - 4 * boxL) / 3;
  let textPadding = 10;

  let originY = y + padding;
  let originX = x + padding;
  for (let i = 0; i < 4; ++i) {
    let curY = originY + i * (boxL + (i > 0 ? gap : 0));
    noStroke();
    fill(colors[i]);
    rect(originX, curY, boxL, boxL);

    fill(51);
    textAlign(LEFT);
    let str = "=  Q" + (i+1).toString();
    let textLen = textWidth(text);
    text(str, originX + boxL + textPadding, curY, textLen, boxL);
  };
};

// 09 function drawTitle()
function drawTitle() {
  let textLen = textWidth(title);
  let padding = (GRAPH_WIDTH - textLen) / 2;

  fill(125);
  textAlign(CENTER);
  textStyle(BOLD);
  text(title, GRAPH_ORIGINX + padding, GRAPH_ORIGINY, textLen + 50, 20);
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
