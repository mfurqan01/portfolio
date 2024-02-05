var apikey="a8c4c93563e546a6773297e7e2b40c14";
var apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

var searchFld = document.querySelector(".inp");
var searchbtn = document.querySelector(".search button");
var imggg = document.querySelector("#mainimg");

async function checkWeather(cit){
    var response = await fetch(apiUrl + cit + `&appid=${apikey}`);
    var data = await response.json();
    
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".degree").innerHTML=Math.floor(data.main.temp )+"°C";
    document.querySelector(".windspd").innerHTML=data.wind.speed +"km/h";
    document.querySelector(".hmd").innerHTML=data.main.humidity;
    document.querySelector(".pressure").innerHTML=data.main.pressure + "psi";
    console.log(data);
    if(data.weather[0].main == "Clear"){
        imggg.src = "sunny.png";
        
    }
    else if(data.weather[0].main == "Clouds")
    {
        imggg.src = "cloudy.png";

     }
     else if(data.weather[0].main == "Rain")
     {
         imggg.src = "rainy.png";
 
      }
      else{imggg.src = "rainy.png";}
    

}
searchbtn.addEventListener("click", ()=>{
   
    checkWeather(searchFld.value)
        
})



//  searchbtn.addEventListener("click", ()=>{
//         checkWeather(searchFld.value); 
//         console.log(data);

//         })

    


