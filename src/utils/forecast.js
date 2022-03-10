// const url = 'http://api.weatherstack.com/current?access_key=523e03a73096024f1d98bc44ee85759a&query=';

// request({url: url, json: true},(err, resp)=>{
//     if (err){
//         console.error('Network issue')
//     } else if(resp.body.error){
//         console.error(resp.body.error)
//     }
//     else {
//         console.log(resp.body.current.weather_descriptions[0] + ': It is currently ' + resp.body.current.temperature +' degrees out. It feels like '+ resp.body.current.feelslike +' degrees out.')
//     }
// })

const request = require('request');


const forecast = (latitude, longitude, callback)=>{
    setTimeout(()=>{

        const url = 'http://api.weatherstack.com/current?access_key=523e03a73096024f1d98bc44ee85759a&query=' +latitude+','+longitude;

        request({url, json: true},(err, {body})=>{
            if(err){
                callback('Network issue', undefined)
            } else if(body.error){
                callback('Unable to fetch weather info', undefined)
            } else {
                callback(undefined, body.location.name + ' It is currently ' + body.current.temperature + ' degress out. And it is ' + body.current.weather_descriptions[0])
            }
        })
    },0)
}

module.exports = forecast

