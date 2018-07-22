import * as d3 from 'd3';
import randomcolor from 'randomcolor'


var data = []

for(var i=0;i<10;i++){
    data.push(Math.floor(d3.randomUniform(10,100)()))
}

var random= randomcolor()



console.log(data);

 var chart_width = 800
 var chart_height = 400
 var padding = 50

//create svg
var svg = d3.select("#chart")
    .append("svg")
    .attr('width',chart_width )
    .attr('height', chart_height)


//Binding Data and Create Rect
svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x',function(d,i){
        return i*(chart_width/data.length)
    })
    .attr('y',function(d){
        return chart_height-d*3;
    })
    .attr('width',chart_width/data.length - padding)
    .attr('height',function(d){
        return d*3
    })
    .attr('fill','#7ED26D')

svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text(function(d){
        return d
    })
    .attr('x',function(d,i){
        return i*(chart_width/data.length)+15
    })
    .attr('y',function(d,i){
        return chart_height-d*3
    })
    .attr('font-size','24px')
    .attr('fill','#000')

// scatterplot
var data2 = [
    [400,200],
    [210,140],
    [722,300],
    [70,160],
    [250,50],
    [110,280],
    [699,225],
    [90,220]
]



var svg2 = d3.select('#chart2')
    .append('svg')
    .attr('width', chart_width)
    .attr('height',chart_height)

//create scale
var x_scale = d3.scaleLinear()
    .domain([0,d3.max(data2,function(d){
        return d[0]
    })])
    .range([padding,chart_width-padding]);


var y_scale = d3.scaleLinear()
    .domain([0,d3.max(data2,function(d){
        return d[1]
    })])
    .range([chart_height-padding,padding])


var r_scale = d3.scaleLinear()
    .domain([0,d3.max(data2,function(d){
        return d[0];
    })])
    .range([5,30])

var a_scale= d3.scaleSqrt()
    .domain([0,d3.max(data2,function(d){
        return d[1];
    })])
    .range([0,25])

svg2.selectAll('circle')
    .data(data2)
    .enter()
    .append('circle')
    .attr('cx',function(d){
        return x_scale(d[0])
    })
    .attr('cy',function(d){
        return y_scale(d[1])
    })
    .attr('r',function(d){
        return a_scale(d[1])
    })
    .attr('fill','#D1AB0E')

svg2.selectAll('text')
    .data(data2)
    .enter()
    .append('text')
    .text(function(d) {
        return d
    })
    .attr('x',function(d){
        return x_scale(d[0])
    })
    .attr('y',function(d){
        return y_scale(d[1])
    })

var slices = [100,200,300,400,500,600]
var scale = d3.scaleLinear()
    .domain([d3.min(slices),d3.max(slices)])
    .range([0,100])

console.log(scale(600))





// scatterplot

var data3 = [
    {date:'07/01/2017',num:20},
    {date:'07/02/2017',num:37},
    {date:'07/03/2017',num:25},
    {date:'07/04/2017',num:45},
    {date:'07/05/2017',num:23},
    {date:'07/06/2017',num:33},
    {date:'07/07/2017',num:49},
    {date:'07/08/2017',num:40},
    {date:'07/09/2017',num:36}
]
var time_parse= d3.timeParse('%m/%d/%Y')
var time_format= d3.timeFormat('%A %e %B')

data3.map(function(d,i){
    data3[i].date = time_parse(d.date)
})


var svg3 = d3.select("#chart3")
    .append('svg')
    .attr('width',chart_width)
    .attr('height',chart_height)

var scale_time_x = d3.scaleTime()
    .domain([d3.min(data3,function(d){
        return d.date;
    }),d3.max(data3,function(d){
        return d.date;
    })])
    .range([padding,chart_width-padding*2])

var scale_time_y = d3.scaleLinear()
    .domain([0,d3.max(data3,function(d){
        return d.num
    })])
    .range([chart_height-padding,padding])


var a_scale_3= d3.scaleSqrt()
    .domain([0,d3.max(data3,function(d){
        return d.num;
    })])
    .range([0,25])


svg3.selectAll('circle')
    .data(data3)
    .enter()
    .append('circle')
    .attr('cx',function(d){
        return scale_time_x(d.date)
    })
    .attr('cy',function(d){
        return scale_time_y(d.num)
    })
    .attr('r',function(d){
        return a_scale_3(d.num)
    })
    .attr('fill',random)

svg3.selectAll('text')
    .data(data3)
    .enter()
    .append('text')
    .text(function(d){
        return time_format(d.date)
    })
    .attr('x',function(d){
        return scale_time_x(d.date)
    })
    .attr('y',function(d){
        return scale_time_y(d.num)
    })


//chart 4 axis
var x_axis = d3.axisBottom(x_scale)
    //.ticks(4)
    .tickValues([0,150,250,350,600])

var y_axis = d3.axisLeft(y_scale)
    .ticks(5)

var svg4= d3.select("#chart4")
    .append('svg')
    .attr('width',chart_width)
    .attr('height', chart_height)



svg4.append('g')
    .attr('class','y-axis')
    .attr('tranform','translate('+(padding)+',0)')
    .call(y_axis);



svg4.selectAll('circle')
    .data(data3)
    .enter()
    .append('circle')
    .attr('cx',function(d){
        return scale_time_x(d.date)
    })
    .attr('cy',function(d){
        return scale_time_y(d.num)
    })
    .attr('r',function(d){
        return a_scale_3(d.num)
    })




















































































/*

 import * as d3 from 'd3';
 import dashboard from './dashboard'



 var dataset=[];
 var chart_width = 800;
 var chart_height = 400;
 var bar_padding = 5;
 var date = "07/01/2015"


var dates = [
    {date:'07/01/2017',num:20},
    {date:'07/02/2017',num:37},
    {date:'07/03/2017',num:25},
    {date:'07/04/2017',num:45},
    {date:'07/05/2017',num:23}
]
var time_parse= d3.timeParse('%m/%d/%Y');
var convertidos=[]

date = time_parse(date)


dates=dates.map((d,i)=>{
    return time_parse(d['date'])
})
console.log("este es dates"+dates)
console.log(dates)
console.log("este es date "+date)



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
