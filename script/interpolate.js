var dataArray = [{x:5,y:20}, {x:10,y:15},{x:15,y:25},{x:20,y:20},{x:35,y:35},]


var svg = d3.select("body").append("svg")
    .attr("height", "100%")
    .attr("width", "100%");

var line = d3.line()
    .x(function (d,i){return d.x*6; })
    .y(function (d,i){return d.y*4; })
    .curve(d3.curveCardinal);

var chartGroup = svg.append("g").attr("transform","translate(0,0)")

chartGroup.append("path")
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("d", line(dataArray));

chartGroup.selectAll("circle")
    .data(dataArray)
    .enter().append("circle")
            .attr("cx",function (d,i){return d.x*6; })
            .attr("cy",function (d,i){return d.y*4; })
            .attr("r","2");