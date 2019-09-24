var dataArray = [5, 11, 18];

var svgL = d3.select("#lineChartDiv").append("svg")
    .attr("width","400")
    .attr("height","300");

var newLineX = 20;

svgL.selectAll("line")
  .data(dataArray)
  .enter().append("line")
          .attr("x1", newLineX)
          .attr("y1", function (d,i){return 80+(i*20);})
          .attr("x2", function(d){ return newLineX+(d*15);})
          .attr("y2", function (d,i){return 80+(i*20);})
          .style("stroke", "green")
          .attr("stroke-width", "2");

//Bar Chart
var svg = d3.select("#barChartDiv").append("svg")
  .attr("height", "300")
  .attr("width", "400");

svg.selectAll("rect")
  .data(dataArray)
  .enter().append("rect")
  .attr("height", function (d, i) { return d; })
  .attr("width", "50")
  .attr("x", function (d, i) { return 10 + (60 * i); })
  .attr("y", function (d, i) { return 200 - d; })
  .attr("fill", "aqua")

//Circle Chart
var svgC = d3.select("#circleChartDiv").append("svg")
  .attr("height", "300")
  .attr("width", "400");

var newCircleX = 20;

svgC.selectAll("circle.first")
  .data(dataArray)
  .enter().append("circle")
  .attr("class", "first")
  .attr("cx", function (d, i) {
    newCircleX += (d * 6) + (i * 20);
    return newCircleX;
  })
  .attr("cy", "100")
  .attr("r", function (d, i) { return d * 3; });

//Elipse Chart
var svgE = d3.select("#ellipseChartDiv").append("svg")
  .attr("height", "300")
  .attr("width", "400");

var newEllipseX = 20;

svgE.selectAll("ellipse")
  .data(dataArray)
  .enter().append("ellipse")
  .attr("class", "second")
  .attr("cx", function (d, i) {
    newEllipseX += (d * 6) + (i * 20);
    return newEllipseX;
  })
  .attr("cy", "100")
  .attr("rx", function (d, i) { return d * 3; })
  .attr("ry", "30")

//Text

svg.append("text")
  .text("hello, world")
  .attr("x",newLineX+120)
  .attr("y","100");