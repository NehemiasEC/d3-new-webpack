import * as d3 from 'd3';
/*
d3.csv("assets/data/data.csv").then(function(data){
    console.log(data)
    generate(data.columns)
});*/

d3.json('https://data.cityofnewyork.us/resource/kuz6-hiwt.json').then(function(data){
    generate(data);
    console.log(data)
})

//var dataset=[10,20,30,40,50];

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
}
