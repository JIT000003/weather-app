$(".searchButton").click(function (){
    var city = $("input").val();
    checkWeather(city);
});

$(document).keydown(function(){
    if(event.key=="Enter"){
        var city = $("input").val();
        checkWeather(city);
    }
});

var apiKey='5681c6ed92f5ac4dfc94ab29f32879ea';

function checkWeather(city){
    var apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric'+'&q='+city+'&appid='+apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            if(data.cod == "404"){
                $("#city").text("city not found");
                $("#temp").text("--°c");
                $(".humidity").text("--%");
                $(".wind").text("-- km/h");
            }

            else{
                $("#city").text(data.name);
                $("#temp").text(Math.round(data.main.temp) + "°c");
                $(".humidity").text(data.main.humidity + "%");
                $(".wind").text(data.wind.speed + " km/h");

                //in seconds
                var time=data.dt+data.timezone;
                //in miliseconds
                var localTime = new Date(time*1000);
                let localHour = localTime.getUTCHours(); 
                console.log("Local time in city -> ", localTime.getUTCHours() , ":" ,  localTime.getUTCMinutes() , ":" ,  localTime.getUTCSeconds());

                if(localHour>=6 && localHour <18){
                    weatherLogoSun(data.weather[0].main);
                }
                else{
                    weatherLogoMoon(data.weather[0].main);
                }
            }

        });
}


function weatherLogoSun(weather){
    if(weather == "Clear"){
        $(".weatherIcon").attr("src","./sun/clear.png");
    }
    else if(weather == "Clouds"){
        $(".weatherIcon").attr("src","./sun/cloudy.png");
    }
    else if(weather == "Drizzle"){
        $(".weatherIcon").attr("src","./sun/drizzle.png");
    }
    else if(weather == "Mist"){
        $(".weatherIcon").attr("src","./sun/mist.png");
    }
    else if(weather == "Rain"){
        $(".weatherIcon").attr("src","./sun/rain.png");
    }
    else if(weather == "Snow"){
        $(".weatherIcon").attr("src","./sun/snow.png");
    }
    else if(weather == "Thunder"){
        $(".weatherIcon").attr("src","./sun/thunder.png");
    }
}


function weatherLogoMoon(weather){
    if(weather == "Clear"){
        $(".weatherIcon").attr("src","./moon/clear.png");
    }
    else if(weather == "Clouds"){
        $(".weatherIcon").attr("src","./moon/cloudy.png");
    }
    else if(weather == "Drizzle"){
        $(".weatherIcon").attr("src","./moon/drizzle.png");
    }
    else if(weather == "Mist"){
        $(".weatherIcon").attr("src","./moon/mist.png");
    }
    else if(weather == "Rain"){
        $(".weatherIcon").attr("src","./moon/rain.png");
    }
    else if(weather == "Snow"){
        $(".weatherIcon").attr("src","./moon/snow.png");
    }
    else if(weather == "Thunder"){
        $(".weatherIcon").attr("src","./moon/thunder.png");
    }
}