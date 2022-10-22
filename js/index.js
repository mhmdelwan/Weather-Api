async function getWeather(show) {
  var res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=c010612ee4054b4fa5855513221910&q=${show}&days=7`
  );
  var finalRes = await res.json();
  console.log(finalRes.forecast.forecastday[1].date);

  display(finalRes);
}
getWeather();

document.getElementById("search").addEventListener("keyup", (show) => {
  getWeather(show.target.value);
});
getWeather("cairo");
days = [
  "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
];
months = ["January","February","March","April","May","June","July","August","September","October","November","December",
];
function display(show) {
  let date = new Date(show.current.last_updated);
  let dateTwo = new Date(show.forecast.forecastday[1].date);
  let dateThree = new Date(show.forecast.forecastday[2].date);
  document.getElementById("Data").innerHTML = `  <div class="col-md-4 pt-5">
         <div class="contain">
             <div class="date d-flex">
             <p>${months[date.getMonth()]}</p>
             <p class="month">${days[date.getDay()]}</p>
             </div>
             <h4 class='text-info'>${show.location.name}</h4>
             
             <div class="temp d-flex">
             <h1 class="pe-5  me-5">${
               show.current.temp_c
             }<sup>o</sup>C</h1>    
                 <img src="http://${show.current.condition.icon}"> 
                                             
             </div>
             <p>${show.current.wind_degree}<sup>o</sup></p>
             <p>${show.current.condition.text}</p>
    
         </div>
     </div>
     <div class="col-md-4 pt-5">
         <div class="contain">
             <div class="date d-flex">
             <p>${months[dateTwo.getMonth()]}</p>
             <p class="month">${days[dateTwo.getDay()]}</p>
             </div>
             <h4 class='text-info'>${show.location.name}</h4> 
             <div class="temp d-flex ">
             <h1 class="pe-5 me-5">${
               show.forecast.forecastday[1].day.maxtemp_c
             }<sup>o</sup>C</h1>
                 <img  src="https://${
                   show.forecast.forecastday[1].day.condition.icon
                 }">                
                 
             </div>
             <p class='text-white'>${
               show.forecast.forecastday[1].day.mintemp_c
             }<sup>o</sup>C</p>
             <p >${show.forecast.forecastday[1].day.condition.text}</p>
    
         </div>
     </div>
     <div class="col-md-4 pt-5 ">
         <div class="contain">
             <div class="date d-flex">
             <p>${months[dateThree.getMonth()]}</p>
             <p class="month">${days[dateThree.getDay()]}</p>
             </div>
             <h4 class='text-info'>${show.location.name}</h4>
             <div class="temp d-flex">
             <h1 class="pe-5 me-5">${
               show.forecast.forecastday[2].day.maxtemp_c
             }<sup>o</sup>C</h1>
                 <img src="https://${
                   show.forecast.forecastday[2].day.condition.icon
                 }">                 
             </div>
             <p class='text-white'>${
               show.forecast.forecastday[2].day.mintemp_c
             }<sup>o</sup>C</p>
             <p >${show.forecast.forecastday[2].day.condition.text}</p>
    
         </div>
     </div>`;
}

