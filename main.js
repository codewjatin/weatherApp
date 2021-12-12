const apiKey = 'c7d5c8a1dd0aec57f5dd6316725c7750'
const unit = 'metric'
const userLocation = 'Jamshedpur'
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const day = document.getElementById('day')
const dateData = document.getElementById('date')
const locationName = document.getElementById('location')
const temp = document.getElementById('tempValue')
const tempUnit = document.getElementById('tempUnit')
const minTempUnit = document.getElementById('minTempUnit')
const maxTempUnit = document.getElementById('maxTempUnit')
const weather = document.getElementById('weatherType')
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')
const inputField = document.getElementById('locationVal')
const changeBtn = document.getElementById('changeLocation')
const pressure = document.getElementById('pressure')
const maxTemp = document.getElementById('max')
const minTemp = document.getElementById('min')

async function getData(location) {
    const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`
    )

    const body = await data.json()
    return body
}

async function setData(location) {
    const date = new Date()
    const weatherData = await getData(location)
    day.textContent = days[date.getDay()]
    dateData.textContent = `${date.getDate()} ${
        months[date.getMonth() - 1]
    } ${date.getFullYear()}`
    locationName.textContent = `${weatherData.name}, ${weatherData.sys.country}`
    temp.textContent = Math.floor(weatherData.main.temp)
    tempUnit.textContent = unit === 'metric' ? 'C' : 'F'
    minTempUnit.textContent = unit === 'metric' ? 'C' : 'F'
    maxTempUnit.textContent = unit === 'metric' ? 'C' : 'F'
    weather.textContent = weatherData.weather[0].main
    humidity.textContent = weatherData.main.humidity
    wind.textContent = Math.floor(weatherData.wind.speed * 3.6)
    pressure.textContent = weatherData.main.pressure
    maxTemp.textContent = Math.floor(weatherData.main.temp_max)
    minTemp.textContent = Math.floor(weatherData.main.temp_min)
}

setData(userLocation)

changeBtn.addEventListener('click', () => {
    if (inputField.value.trim()) {
        setData(inputField.value.trim())
        inputField.value = null
    }
})
