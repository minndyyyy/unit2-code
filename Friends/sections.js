//Read the data
d3.csv("../data.csv", function(data) {

  var size = 1500;
  
  // set the dimensions and margins of the graph
  var margin = {top: 50, right: 50, bottom: 10, left: 50},
      width = size - margin.left - margin.right,
      height = size/2 - margin.top - margin.bottom;
  
  // append the svg object to the body of the page
  var svg = d3.select("#my_dataviz")
              .append("svg")
              //.attr("width", width + margin.left + margin.right)
              //.attr("height", height + margin.top + margin.bottom)
              //.attr("viewBox", "0 0 2000 800") //test viewBox
              .attr('width', '100%')
              .attr('viewBox', '0 0 ' + size + ' ' + size)
  
  
    //.append("g")
      //.attr("transform",
        //    "translate(" + margin.left + "," + margin.top + ")");
  
  
    // Add X axis
    var x = d3.scaleLinear()
      .domain([1, 10])
      .range([400,width-100]);
  
  
   // xx = function (x) {if (x<1) return x*20; else return 400+x*100}
    xx = function (x) {if (x<1) return x+80; else return 300+x*100}
  
  //console.log(x)
  
    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
  
        // Add X axis label:
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width-100)
        .attr("y", height+40 )
        .text("Season")
        .style("font-family","Lato,sans-serif");
  
  
   // Add Y axis
   
    var y = d3.scaleLinear()
      .domain([0, 6])
      .range([height,0]);
    //svg.append("g")
    //  .call(d3.axisLeft(y));
    
  
      
  /*
  // dots
    svg.append('g')
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
        .attr("cx", function (d) { return x(d.season); } )
        .attr("cy", function (d) { return y(d.number); } ) 
        .attr("r", 10) 
  */
  
  /*
  svg.append('line').attr('x1',100).attr('y1',0).attr('x2',100).attr('y2', height)
  .style("stroke","rgb(255,0,0)")
  .style("stroke-width","4")
  */
  
  // Test date Character image
  
  var imgs = svg.selectAll("image")
                .data(data);
                  imgs.enter()
                  .append("image")
                  //.attr("xlink:href", "image/1,1.jpg")
                  .attr("xlink:href", function(d) {return "../image/" + d.number + "," + d.season + ".png";})
                  .attr("x", function (d) { return xx(d.season);} )
                  .attr("y", function (d) { return y(d.number);} )
                  .attr("width","80")
                  .attr("transform","translate(-40,0)")
  
  
  
  })