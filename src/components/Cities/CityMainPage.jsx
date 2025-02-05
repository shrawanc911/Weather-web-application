import { useEffect } from 'react'
import './CityMainPage.css'
import { useState } from 'react'

const CityMainPage = ()=>{
    const [data,setData] = useState(null);
    const [searchCity,setSearchCity] = useState("");

    const fetchData = async(city)=>{
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`);
        const d = await response.json()
        if(d.length>0){
            console.log(d)
            setData(d)
        }else{
            console.log("Empty")
        }
    }

    // useEffect(()=>{
    //     fetchData()
    // })
    return (
        <div className="mainpart">
        <div className="search">
                <input type="text" name="cityName" value={searchCity} placeholder='Search for cities' onChange={(e)=>setSearchCity(e.target.value)}/>
                <button onClick={()=>fetchData(searchCity)}>Search</button>
            </div>
            <div className='city-data'>
                <div className="city-data-image"><img src="/images/Day/0.png" alt="weather image" width={'80px'} height={'80px'} /></div>
                <div className="city-data-data">
                    <p className="city-data-data-name">Vadodara</p>
                    <p className="city-data-data-weather">Sunny</p>
                </div>
                <div className="city-data-temperature">31</div>
            </div>
            </div>
    )
}

export default CityMainPage