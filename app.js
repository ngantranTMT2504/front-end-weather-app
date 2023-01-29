var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility')
var wind = document.querySelector('.wind')
var sun = document.querySelector('.sun')
var time = document.querySelector('.time')

async function changeWeather() {
    search.value.trim()
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`

    let data  = await fetch(apiURL).then(res => res.json())
    console.log(data)
}

changeWeather()