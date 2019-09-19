var dataArray = [5, 11, 18];

var svg = d3.select("#barChartDiv").append("svg")
  .attr("height", "500")
  .attr("width", "500");

svg.selectAll("rect")
  .data(dataArray)
  .enter().append("rect")
      .attr("height","200")
      .attr("width","50")
      .attr("x","20")
      .attr("y","100")