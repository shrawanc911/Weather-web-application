import { useEffect } from 'react'
import './CityMainPage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'

const CityMainPage = ({favStatus,setFavStatus,favCity,setFavCity,favLoc,setFavLoc,updateLocation,location})=>{
    const [data,setData] = useState(null);
    const [searchCity,setSearchCity] = useState("");
    const [isFavourite,setFavourite] = useState(false);

    useEffect(()=>{
        if(favLoc){
            // checkFavourite(location.latitude,location.longitude)
        }
    },[])


    const toggleFavourite = (index)=>{
        if(favStatus[index]){
            let updatedFavLoc = [...favLoc];
            let updatedFavCity = [...favCity];
            let updatedFavStatus = [...favStatus];
            updatedFavLoc.splice(index, 1);  
            updatedFavCity.splice(index, 1);  
            updatedFavStatus.splice(index, 1);
            setFavLoc(updatedFavLoc)
            setFavCity(updatedFavCity)
            setFavStatus(updatedFavStatus)
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
        
            {favLoc && favLoc.map((el,index)=>{
                return(<div className='city-data' key={index}><div className="city-data-image"><img src="/images/Day/0.png" alt="weather image" width={'80px'} height={'80px'} /></div>
                <div className="city-data-data">
                    <p className="city-data-data-name">{favCity[index]}</p>
                    <p className="city-data-data-weather">Sunny</p>
                </div>
                <div className="fav-icon">
                            <button onClick={()=>toggleFavourite(index)}>
                            <FontAwesomeIcon className='font-fav-icon' icon={faHeart} size="3x" color={favStatus[index] ? 'red' : 'gray'} spin={favStatus[index]} />
                            </button>
                </div>
                <div className="city-data-temperature">31</div></div>)
            })}
        </div>
    )
}

export default CityMainPage