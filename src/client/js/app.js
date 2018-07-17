 import * as d3 from 'd3';
/*
d3.csv("assets/data/data.csv").then(function(data){
    console.log(data)
    generate(data.columns)
});
let data_json;
d3.json('https://data.cityofnewyork.us/resource/waf7-5gvc.json').then(function(data){

    data.forEach(function(d){
        return d;

    })
})
.then((d)=>{
    data_json+=d
})*/




/*
d3.csv("/data/cities.csv", function(data) {
  data.forEach(function(d) {
    d.population = +d.population;
    d["land area"] = +d["land area"];
  });
  console.log(data[0]);
});

*/

var dataset=[];
var chart_width = 800;
var chart_height = 400;
var bar_padding = 5;


for (var i=0;i<10;i++){
     var num = Math.floor(d3.randomUniform(1,50)());
     dataset.push(num);
}
console.log(dataset.map(function(d,i){
    return `${i+1} ${d}`;
}))


var svg = d3.select('#chart')
    .append('svg')
    .attr('height',chart_height)
    .attr('width',chart_width);


// bind dATA AND create bars
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x',function(d,i){
        return i * (chart_width/dataset.length);
    })
    .attr('y',function(d){
        return chart_height -d*10;
    })
    .attr('width',chart_width/dataset.length-bar_padding)
    .attr('height',function(d){
        return d*10;
    });

svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d){
        return d;
    })
    .attr('x',function(d,i){
        return i * (chart_width/dataset.length)+5;
    })
    .attr('y',function(d){
        return chart_height -d *10 + 15;
    })
    .attr('fill','black')
    .attr('font-size','24')

/*
function generate(dataset){
    var el = d3.select('body')
        .selectAll('p')
        .data(dataset)
        .enter()
        .append('p')
        .text(function(d){
            return  d
        })


    console.log(dataset)
}*/
