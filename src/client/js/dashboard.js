
export default function dashboard(){
    let my_data=new Array()
    let url = 'https://data.cityofnewyork.us/resource/waf7-5gvc.json?$where=year>1979'
    fetch(url)
        .then((resp)=>{
            return resp.json()
        })
        .then(function(myjson){
            my_data=myjson.map(function(d,i){
                return d.year
            })/*
            my_data[1]=myjson.map(function(d){
                return d.per_capita_gallons_per_person_per_day
            })*/
        })
        return my_data

}
