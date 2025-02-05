import LeftSidebar from './components/LeftSidebar'
import './App.css'
import MainPage from './components/Mainpage'
import RightSideBar from './components/RightSidebar'
import { useEffect, useState } from 'react'

function App() {
  

  
      // const storedLocation = JSON.parse(localStorage.getItem('location'));
        
      // if (storedLocation) {
      //       setLocation(storedLocation);
      //       fetchCity(storedLocation.latitude, storedLocation.longitude);  
      //   } else {
      //       if (navigator.geolocation) {
      //           navigator.geolocation.getCurrentPosition(
      //               async (position) => {
      //                   const { latitude, longitude } = position.coords;
      //                   setLocation({ latitude, longitude });
      //                   localStorage.setItem('location', JSON.stringify({ latitude, longitude }));
      //                   await fetchCity(latitude, longitude); 
      //               },
      //               (err) => {
      //                   setError('Unable to retrieve your location');
      //                   console.error(err);
      //               }
      //           );
      //       } else {
      //           setError('Geolocation is not supported by this browser.');
      //       }
      //   }

      
    
  return (
    <>
      <div className="homepage">
        <LeftSidebar/>
        <MainPage/>
        <RightSideBar/>
      </div>
    </>
  )
}

export default App
