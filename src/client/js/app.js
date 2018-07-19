 import * as d3 from 'd3';
 import dashboard from './dashboard'
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
    .attr('font-size','24');

var data = [
    [400,200],
    [210,140],
    [722,300],
    [70,160],
    [250,50],
    [325,250],
    [410,50],
    [470,300],
    [100,100],
]
var width=800;
var height=400;
var padding= 50;

var svg1 = d3.select("#chart2")
    .append("svg")
    .attr('width', width)
    .attr('height', height);
//create scaleLinea
var x_scale = d3.scaleLinear()
    .domain([0,d3.max(data,function(d){
        return d[0]
    })])
    .range([padding,chart_width-padding]);

var y_scale = d3.scaleLinear()
    .domain([0,d3.max(data,function(d){
        return d[1]
    })])
    .range([chart_height- padding,padding])


var r_scale= d3.scaleLinear()
    .domain([0,d3.max(data,function(d){
        return d[1];
    })])
    .range([5,30])
    .clamp(true);
//create circles
svg1.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx',function(d){
        return x_scale(d[0]);
    })
    .attr('cy',function(d){
        return y_scale(d[1]);
    })
    .attr('r',function(d){
        return r_scale(d[0]);
    })
    .attr('fill',function(){
        return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    });
svg1.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text(function(d){
        return d.join(',');
    })
    .attr('x',function(d){
        return x_scale(d[0]);
    })
    .attr('y',function(d){
        return y_scale(d[1]);
    })

var slices= [100,200,300,400,500];
var x = d3.scaleLinear()
    .domain([d3.min(slices),d3.max(slices)])
    .range([10,350]);

/*
console.log(x(600))
var my_data=dashboard()

console.log(my_data[0]);

/*

var water_svg= d3.select("#water")
    .append('svg')
    .attr('width', chart_width)
    .attr('height', chart_height);

water_svg.selectAll('rect')
    .data()
    .enter()
    .append('rect')
    .attr('x',my_data[1])
    .attr('y',my_data[0])
    .attr('width',function(d){
        return d;
    })
    .attr('height',function(d){
        return d;
    });
*/




    //create levels
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
