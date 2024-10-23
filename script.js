let search = document.querySelector('.search');
let btn =document.querySelector('.btn');
const API_KEY=`161b127dc1366cbeea2b3899c7a8527f`;
let main =document.querySelector('.main')
let left =document.querySelector('.left')
let right =document.querySelector('.right')

let getweather = async(city)=>{
    city=city.trimEnd();
    console.log('fetch weather api')
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url)
    const data =await response.json();
    if(data.cod =="404"){
        main.innerHTML =` <h2>City not found</h2>`;
        left.innerHTML=`
  <span class="wi--humidity"></span>
   <h3>error</h4>
   <h4>Humidity</h4>
   `;
   right.innerHTML=`
   <span class="openmoji--wind-face"></span>
   <h3>error</h3>
   <h4>Wind Speed</h4>
   `
        return;
    }
    console.log(data);
    let iconcode =data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconcode}@4x.png`;
    main.innerHTML =`

   <img src="${iconUrl}" alt="${data.weather[0].description}">
   <h2>${data.main.temp}°C</h2>
   <h2>${data.name}</h2>
   `;
   left.innerHTML=`
  <span class="wi--humidity"></span>
   <h3>${data.main.humidity}%</h4>
   <h4>Humidity</h4>
   `;
   right.innerHTML=`
   <span class="openmoji--wind-face"></span>
   <h3>${data.wind.speed}Km/h</h3>
   <h4>Wind Speed</h4>
   `


}


btn.addEventListener('click' ,()=>{
    getweather(search.value)
})


