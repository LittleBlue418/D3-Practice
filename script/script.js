var dataArray = [5, 11, 18];

var svg = d3.select("#barChartDiv").append("svg")
  .attr("height", "500")
  .attr("width", "500");

svg.selectAll("rect")
  .data(dataArray)
  .enter().append("rect")
      .attr("height",function(d,i){return d;})
      .attr("width","50")
      .attr("x", function(d,i){return 60*i;})
      .attr("y", function(d,i){return 300-d;})