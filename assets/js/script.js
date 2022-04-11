// window.addEventListener("load", () => {
//let long;
//let lat;

//if (navigator.geolocation) {
//navigator.geolocation.getCurrentPosition(position => {
//long = position.coords.longitude;
//lat = position.coords.latitude;

//const api = "https://api.weatherapi.com/v1/current.json?key=7d749c5abe52471ab2210801220804&q=houston&aqi=no"
//});
//}
//});
function getWeather(event) {
    var getCity = document.getElementById("city");
    console.log(getCity.value)
    const getApi = "https://api.weatherapi.com/v1/current.json?key=7d749c5abe52471ab2210801220804&q=" + getCity.value + "&aqi=no";
    fetch(getApi).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        document.querySelector("#cityName").textContent = data.location.name
        document.querySelector("#temp").textContent = data.current.temp_f
        document.querySelector(".temperature-description").textContent = data.current.condition.text
        var iconImg = 'http:' + data.current.condition.icon
        document.querySelector(".Iconimg").src = iconImg;
        document.querySelector(".location-timezone").textContent = data.location.localtime
        var getForecast = "http://api.weatherapi.com/v1/forecast.json?key=7d749c5abe52471ab2210801220804&q=" + getCity.value + "&days=5&aqi=no&alerts=no"
        
        fetch(getForecast).then((response) => {
            return response.json()
        }).then((data2) => {
            console.log(data2)
            document.querySelector(".forecast").textContent = data.forecast
;
        })
        for (var i = 1; i < data2.forecast.forecastday.length; i++){}
    })

}
document.getElementById("search").addEventListener("click", getWeather)





