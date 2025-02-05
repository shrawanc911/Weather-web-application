import './rightsidebar.css'
import {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const RightSideBar = ({favLoc,setFavLoc,updateLocation,location})=>{

    const [forcastWether,setForcastWether] = useState(null);
    const [day,setDay] = useState(null);
    const [isFavourite,setFavourite] = useState(false);

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

    const whetherIcon = (code)=>{
        
        const hours = new Date().getHours();
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


    const setDayFor7Day = ()=>{
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday']
        let a = new Date().getDay()
        let temp = [];
        for(let i=0;i<7;i++){
            let x = days[a%7]
            temp.push(x)
            a++;
        }
        setDay(temp)
    }

    const fetchForecastData = async(latitude,longitude)=>{
                    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`)
                    const data = await response.json()
                    // console.log(data)
                    setForcastWether(data)
            
        }

    useEffect(()=>{
        setDayFor7Day()
        fetchForecastData(location.latitude,location.longitude)
        if(favLoc){
            checkFavourite(location.latitude,location.longitude)
        }
    },[location])

    const checkFavourite = (lat,lon)=>{
        try{
            setFavourite(favLoc.some(loc => loc[0] === lat && loc[1] === lon))
        }catch(err){
            console.log(err)
        }
    }

    const toggleFavourite = ()=>{
        setFavourite(!isFavourite)
        if(isFavourite){
            let a = favLoc
            let b = a.filter((el)=> el[0]!==location.latitude && el[1]!==location.longitude)
            setFavLoc(b)
        }else{
            let a = favLoc
            a.push([location.latitude,location.longitude])
            setFavLoc(a)
        }
    }
    
    return (<>
    <div className="right">
        <div className="fav-icon">
            <button onClick={toggleFavourite}>
            <FontAwesomeIcon icon={faHeart} size="3x" color={isFavourite ? 'red' : 'gray'} spin={isFavourite} />
            </button>
            </div>
        <div className="right-side-bar">
            <div className="right-side-bar-main">
                <p>7 - DAY FORCAST</p>
                {forcastWether && forcastWether.daily && forcastWether.daily.temperature_2m_max.map((ele,index)=>{return(
                    <div className="rightsidebar-data" key={index} id={`last-data-${index}`}>

                        <div className='rightsidebar-data-p1'><p>{day[index]}</p></div>
                
                        <div className="rightsidebar-data-img">
                            <img src={`/images/${whetherIcon(forcastWether.daily.weather_code[index])}.png`} alt="image" height="50px" width="50px" />
                        </div>
                        <div className="rightsidebar-forcast-name"><p>{weatherDescriptions[forcastWether.daily.weather_code[index]]||'Unknown'}</p></div>
                        <div className="rightsidebar-data-p2"><p><span>{Math.round(forcastWether.daily.temperature_2m_max[index])}°C</span>/{Math.round(forcastWether.daily.temperature_2m_min[index])}°C</p></div>
                    </div> ) 
                })}
            </div>
        </div>
        </div>
        </>
    )
}

export default RightSideBar