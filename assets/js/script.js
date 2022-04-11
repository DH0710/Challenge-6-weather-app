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
        var iconImg = "http://"+ data.current.condition.icon
        document.querySelector(".Iconimg").textContent=("src", "iconImg")
        document.querySelector(".location").textContent = data.curent.location.localtime
        
    })

}
document.getElementById("search").addEventListener("click", getWeather)





