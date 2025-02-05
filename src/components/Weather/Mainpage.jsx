import { useEffect, useState } from 'react';
import './mainpage.css'
import { faL } from '@fortawesome/free-solid-svg-icons';


const MainPage = ({updateLocation,location})=>{
    const [cityName,setCityName] = useState(null);
    const [temperature,setTemperature] = useState(null);
    const [forcastWhether,setForcastWhether] = useState(null);
    const [index,setIndex] = useState(null);
    const [l,setL] = useState(false)
    const [error,setError] = useState(null);
    
    //This the data from CityMainPage
    const [data,setData] = useState(null);
    const [searchCity,setSearchCity] = useState("");
    
    
    const fetchSearchCityData = async(city)=>{
        setL(true)
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`);
        const d = await response.json()
        if(d.length>0){
            setData(d)
            setCityName(city.charAt(0).toUpperCase() + city.slice(1).toLowerCase())
            const latitude = (Number(d[0].boundingbox[0]) + Number(d[0].boundingbox[1]))/2
            const longitude = (Number(d[0].boundingbox[2]) + Number(d[0].boundingbox[3]))/2
            fetchWhetherData(latitude,longitude)
            updateLocation({latitude,longitude})
        }else{
            alert("Enter Correct City")
        }
    }

    const weatherDescriptions = {
        0: "Clear Sky",
        1: "Partly Cloudy",
        2: "Partly Cloudy",
        3: "Overcast",
        45: "Foggy",
        48: "Foggy",
        51: "Drizzle",
        53: "Drizzle",
        55: "Drizzle",
        80: "Drizzle",
        81: "Drizzle",
        82: "Drizzle",
        56: "Freezing Drizzle",
        57: "Freezing Drizzle",
        61: "Rain",
        63: "Rain",
        65: "Rain",
        66: "Freezing Rain",
        67: "Freezing Rain",
        71: "Snow fall",
        73: "Snow fall",
        75: "Snow fall",
        77: "Snow fall",
        85: "Snow fall",
        86: "Snow fall",
        95: "Thunderstorm",
        96: "Thunderstorm",
        99: "Thunderstorm"
    };
    
    const whetherIcon = (code,index)=>{
        
        // const h = forcastWhether.hourly.time[index]
        const hours = Number(index)
        const link = (hours >= 18 || hours < 6) ? 'Night' : 'Day';
        switch (code) {
            case 0:
                return link+'/0'
            case 1:
                case 2:
                    return link+'/1'
                    case 3:
                        return link+'/3'
                        case 45:
                            case 48:
                                return link+'/45'
                                case 51:
                                    case 53:
                                        case 55:
                                            case 80:
                                                case 81:
                                                    case 82:
                                                        return link+'/51'
                                                        case 56:
            case 57:
                case 66:
            case 67:
                return link+'/56'
                case 61:
                    case 63:
                        case 65:
                            return link+'/61'
                            case 71:
                                case 73:
                                    case 75:
                                        case 85:
                                            case 86:
                                                return link+'/71'
                                                case 95:
                                                    case 96:
                                                        case 99:
                                                            return link+'/95'        
                                                            default:
                                                                return link+'/0'
                                                            }
                   
    }
                

    
    const calculateChanceOfRain = (PP, RH, CC, WC) => {
        const weights = {
                precipitationProbability: 0.5,
                relativeHumidity: 0.25,
                cloudCover: 0.15,
                weatherCode: 0.1,
                };
                
        const weatherCode = WC;
        const weatherCodeWeight = weatherCode === 45 || weatherCode === 3 ? 1 : 0; 
        
        const chanceOfRain = weights.precipitationProbability * PP +
                      weights.relativeHumidity * (RH / 100) +
                      weights.cloudCover * (CC / 100) +
                      weights.weatherCode * weatherCodeWeight;
                      
                      return Math.min(chanceOfRain, 100).toFixed(2)*10;
                    };                
                    
    const currentIndex = (forcast)=>{
                        const a = new Date().toISOString().split('T')[0]+'T';
        let b = new Date().toTimeString()
        b = b.slice(0,3)+'00'
        const c = a + b
        setIndex(forcast.hourly.time.indexOf(c))
        // console.log(forcast.hourly.time.indexOf(c))
    }

    function calculateHeatIndex(tempC, humidity) {
        const tempF = tempC * 9 / 5 + 32; 
        const HI = -42.379 + 
        2.04901523 * tempF + 
        10.14333127 * humidity - 
        0.22475541 * tempF * humidity - 
        0.00683783 * tempF ** 2 - 
        0.05481717 * humidity ** 2 + 
        0.00122874 * tempF ** 2 * humidity + 
        0.00085282 * tempF * humidity ** 2 - 
        0.00000199 * tempF ** 2 * humidity ** 2;
        return (HI - 32) * 5 / 9; 
    }
    
    function calculateWindChill(tempC, windSpeed) {
        if (tempC > 10 || windSpeed < 4.8) return tempC; 
        return 13.12 + 0.6215 * tempC - 11.37 * windSpeed ** 0.16 + 0.3965 * tempC * windSpeed ** 0.16;
    }
    
    function calculateRealFeel(temperature, humidity, windSpeed) {
        if (temperature > 27) {
            return calculateHeatIndex(temperature, humidity);
        } else if (temperature <= 10 && windSpeed >= 4.8) {
            return calculateWindChill(temperature, windSpeed); 
        }
        return temperature; 
    }              
    
    
    const getSlicingIndex = ()=>{
        const a = new Date().getHours();
        if(a<12){
            return [0,12]
        }else{
            return [12,24]
        }
    }
    
    
    const fetchCity = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            // console.log("FetchCity",data)
            const city = data.address.county.split(' ')
            setCityName(city[0]);
        } catch (error) {
            setError('Failed to fetch city information');
            console.error("Error fetching city:", error);
        }
    };
    
    useEffect(()=>{
        if(location){
            fetchWhetherData(location.latitude,location.longitude)
        }
    },[])
    
    const fetchForecastData = async (latitude,longitude) => {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=wind_speed_10m&hourly=temperature_2m,rain,weather_code,relative_humidity_2m,wind_speed_10m,precipitation_probability,precipitation,cloud_cover&daily=uv_index_max&timezone=auto&forecast_days=1`);
        const data = await response.json();
        // console.log("This is data",data);
        setForcastWhether(data)
        currentIndex(data)
        // console.log(data)
    };
    
    
    const fetchWhetherData = async(lat,lon)=>{
        if(l===false){
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6f9b87f2a2d075bcaea69fad5bd0043d`)
            const data = await response.json()
            fetchCity(lat,lon);
            let temperature = Math.round(data.main.temp - 273.12)
            setTemperature(temperature)
            fetchForecastData(lat,lon)
                
            
        }else{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6f9b87f2a2d075bcaea69fad5bd0043d`)
            const data = await response.json()
            let temperature = Math.round(data.main.temp - 273.12)
            setTemperature(temperature)
            fetchForecastData(lat,lon)
        }
    }
    const [start] = getSlicingIndex();
    
    return (<>
        <div className="mainpart">
        <div className="search">
                <input type="text" name="cityName" value={searchCity} placeholder='Search for cities' onChange={(e)=>setSearchCity(e.target.value)}/>
                <button onClick={()=>fetchSearchCityData(searchCity)}>Search</button>
            </div>
            <div className="whether-part">
                <div className="whether-part-data">
                    <p className='whether-part-data-p1'>
                        {cityName}
                    </p>
                    <p className="whether-part-data-p2">
                       {forcastWhether && forcastWhether.hourly && weatherDescriptions[forcastWhether.hourly.weather_code[index]]}
                    </p>
                    <p className="whether-part-data-p3">
                    {temperature}°C
                    </p>
                </div>
                <div className="whether-part-icon">
                {forcastWhether && forcastWhether.hourly && 
                    <img src={`/images/${whetherIcon(forcastWhether.hourly.weather_code[index],index)}.png`} alt="whether icon" height="138px" width="138px" />}
                </div>
            </div>
            <div className="forcast">
                <div className="forcast-header">
                    <p>TODAY'S FORCAST</p>
                </div>
                <div className="forcast-data">
                {forcastWhether && forcastWhether.hourly && forcastWhether.hourly.time.slice(...getSlicingIndex()).map((time, index) => {
                    const actualIndex = start + index;
                    if(actualIndex%2===0){
                        return (
                            <div key={index} className="forcast-data-d" id={`forcast-data-${index}`}>
                            <p>{time.slice(11, 16)}</p>
                            <img src={`/images/${whetherIcon(forcastWhether.hourly.weather_code[actualIndex],time.slice(11, 13))}.png`} alt="weather icon" height="50px" width="50px" />
                            <p className="degree">{Math.round(forcastWhether.hourly.temperature_2m[actualIndex])}°C</p>
                            </div>
                            );
                        }
                    })}
                </div>
            </div>
            <div className="airconditions">
                <div className="airconditions-header">
                <p>AIR CONDITIONS</p>
                <button>See more</button>
                </div>
                <div className="airconditions-data">
                    <div className="airconditions-data-r">
                        <div className="head">
                        <img src="/images/thermometer.png" alt="image" height="30px" width="30px" />
                        <p className='air-info'>Real Feel</p>
                        </div>
                        {forcastWhether && forcastWhether.hourly && <p>{Math.ceil(calculateRealFeel(forcastWhether.hourly.temperature_2m[index],forcastWhether.hourly.relative_humidity_2m[index],forcastWhether.hourly.wind_speed_10m[index]))}</p>}
                    </div>
                    <div className="airconditions-data-r">
                    <div className="head">
                    <img src="/images/wind.png" alt="image" height="30px" width="30px" />
                    <p className='air-info'>Wind</p>
                    </div>
                    {forcastWhether && forcastWhether.hourly && <p>{forcastWhether.current.wind_speed_10m} km/h</p>}
                    </div>
                    <div className="airconditions-data-r">
                    <div className="head">
                    <img src="/images/drop.png" alt="image" height="30px" width="30px" />
                    <p className='air-info'>Chance of rain</p>
                    </div>
                    {forcastWhether && forcastWhether.hourly && <p>{calculateChanceOfRain(forcastWhether.hourly.precipitation_probability[index],forcastWhether.hourly.relative_humidity_2m[index],forcastWhether.hourly.cloud_cover[index],forcastWhether.hourly.weather_code[index]).toFixed(2)}</p>}
                    </div>
                    <div className="airconditions-data-r">
                    <div className="head">
                    <img src="/images/setting.png" alt="image" height="30px" width="30px" />
                    <p className='air-info'>UV Index</p>
                    </div>
                    {forcastWhether && forcastWhether.daily && <p>{forcastWhether.daily.uv_index_max[0]}</p>}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainPage