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