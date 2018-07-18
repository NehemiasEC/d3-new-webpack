
export default function dashboard(){
    let my_data=[]
    let url = 'https://data.cityofnewyork.us/resource/waf7-5gvc.json'
    fetch(url)
        .then((resp)=>{
            return resp.json()
        })
        .then(function(myjson){
            myjson.map((data,i)=>{
                my_data.push(data.new_york_city_population)
            })
        })
        console.log(my_data)
}
