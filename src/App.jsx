import LeftSidebar from './components/Weather/LeftSidebar'
import './App.css'
import MainPage from './components/Weather/Mainpage'
import RightSideBar from './components/Weather/RightSidebar'
import { useEffect, useState } from 'react'

function App({favLocation,setFavLocation}) {
  
  const [location, setLocation] = useState(null);
  const [error,setError] = useState(null);

  const storedLocation = JSON.parse(localStorage.getItem('location'));
  
  useEffect(() => {
    if (storedLocation) {
      setLocation(storedLocation);
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            localStorage.setItem('location', JSON.stringify({ latitude, longitude }));
          },
          (err) => {
            setError('Unable to retrieve your location');
            console.error(err);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    }
  },[]);
      
    
  return (
    <>
      <div className="homepage">
        {/* <LeftSidebar/> */}
        {location && <MainPage updateLocation={setLocation} location={location}/>}
        
        {location && <RightSideBar favLoc={favLocation} setFavLoc={setFavLocation} updateLocation={setLocation} location={location}/>}
      </div>
    </>
  )
}

export default App
