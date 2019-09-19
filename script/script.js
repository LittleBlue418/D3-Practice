var dataArray = [5, 11, 18];

var svg = d3.select("#barChartDiv").append("svg")
  .attr("height", "500")
  .attr("width", "500");

svg.selectAll("rect")
  .data(dataArray)
  .enter()
  .append("rect");