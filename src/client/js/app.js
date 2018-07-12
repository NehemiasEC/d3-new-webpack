var dataset=[10,20,30,40,50];



var el = d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text(function(d){
        return  d
    })
    .style('color',function(d){
        if(d>30 ){
            return "red";
        }
        else{
            return "blue";
        }
    })


console.log(el)
