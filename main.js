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
const weatherIcon = document.getElementById('weatherIcon')
const leftBody = document.getElementById('leftBody')

async function getData(location) {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`
    )
    return await res.json()
}

async function setData(location) {
    const weatherData = await getData(location)
    if (weatherData.cod === 200) {
        const date = new Date()
        day.textContent = days[date.getDay()]
        dateData.textContent = `${date.getDate()} ${
            months[date.getMonth()]
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
        weatherIcon.classList.remove(weatherIcon.classList[2])
        switch (weatherData.weather[0].icon) {
            case '01d':
                weatherIcon.classList.add('bi-sun')
                leftBody.style.backgroundImage = 'url(./img/clear_sky.jpg)'
                break
            case '01n':
                weatherIcon.classList.add('bi-moon')
                leftBody.style.backgroundImage =
                    'url(./img/clear_sky_night.jpg)'
                break
            case '02d':
                weatherIcon.classList.add('bi-cloud-sun')
                leftBody.style.backgroundImage = 'url(./img/cloud-sun.jpg)'
                break
            case '02n':
                weatherIcon.classList.add('bi-cloud-moon')
                leftBody.style.backgroundImage = 'url(./img/cloud-moon.jpg)'
                break
            case '03d':
                weatherIcon.classList.add('bi-cloud')
                leftBody.style.backgroundImage = 'url(./img/clouds.jpg)'
                break
            case '03n':
                weatherIcon.classList.add('bi-cloud')
                leftBody.style.backgroundImage = 'url(./img/clouds-night.jpg)'
                break
            case '04d':
                weatherIcon.classList.add('bi-clouds')
                leftBody.style.backgroundImage = 'url(./img/clouds-night.jpg)'
                break
            case '04n':
                weatherIcon.classList.add('bi-clouds')
                leftBody.style.backgroundImage = 'url(./img/clouds-night.jpg)'
                break
            case '09d':
                weatherIcon.classList.add('bi-cloud-drizzle')
                leftBody.style.backgroundImage = 'url(./img/rain.jpg)'
                break
            case '09n':
                weatherIcon.classList.add('bi-cloud-drizzle')
                leftBody.style.backgroundImage = 'url(./img/rain.jpg)'
                break
            case '10d':
                weatherIcon.classList.add('bi-cloud-rain')
                leftBody.style.backgroundImage = 'url(./img/rain.jpg)'
                break
            case '10n':
                weatherIcon.classList.add('bi-cloud-rain')
                leftBody.style.backgroundImage = 'url(./img/rain.jpg)'
                break
            case '11d':
                weatherIcon.classList.add('bi-cloud-lightning')
                leftBody.style.backgroundImage =
                    'url(./img/cloud-lightning.jpg)'
                break
            case '11n':
                weatherIcon.classList.add('bi-cloud-lightning')
                leftBody.style.backgroundImage =
                    'url(./img/cloud-lightning.jpg)'
                break
            case '13d':
                weatherIcon.classList.add('bi-snow2')
                leftBody.style.backgroundImage = 'url(./img/snow.jpg)'
                break
            case '13n':
                weatherIcon.classList.add('bi-snow2')
                leftBody.style.backgroundImage = 'url(./img/snow.jpg)'
                break
            case '50d':
                weatherIcon.classList.add('bi-cloud-haze2')
                leftBody.style.backgroundImage = 'url(./img/haze.jpg)'
                break
            case '50n':
                weatherIcon.classList.add('bi-cloud-haze2')
                leftBody.style.backgroundImage = 'url(./img/haze.jpg)'
                break
        }
    }
}

setData(userLocation)

changeBtn.addEventListener('click', () => {
    if (inputField.value.trim()) {
        setData(inputField.value.trim())
        inputField.value = null
    }
})

inputField.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        changeBtn.click()
    }
})

inputField.focus()