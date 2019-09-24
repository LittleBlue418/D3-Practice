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
  .text("Start align")
  .attr("x",newLineX+120)
  .attr("y","100")
  .style("fill", "none")
  .style("stroke", "blue")
  .style("stroke-width", "1.5")
  .attr("text-anchor", "start")
  .attr("dominant-baseline", "middle")
  svg.append("text")
  .text("Middle align")
  .attr("x",newLineX+120)
  .attr("y","120")
  .style("fill", "none")
  .style("stroke", "blue")
  .style("stroke-width", "1.5")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "middle")
  svg.append("text")
  .text("End align")
  .attr("x",newLineX+120)
  .attr("y","140")
  .style("fill", "none")
  .style("stroke", "blue")
  .style("stroke-width", "1.5")
  .attr("text-anchor", "end")
  .attr("dominant-baseline", "middle")

 //Text2

 var textArray = ['One', 'Two', 'Three'];

svgL.append("text").selectAll("tspan")
  .data(textArray)
  .enter().append("tspan")
  .text(function (d){return d;})
  .attr("x",newLineX+220)
  .attr("y", function (d, i){return 150+(i*30)})
  .style("fill", "none")
  .style("stroke", "blue")
  .style("stroke-width", "1.5")
  .attr("text-anchor", "start")
  .attr("dominant-baseline", "middle");