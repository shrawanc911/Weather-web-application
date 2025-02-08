import {BrowserRouter as Router,Routes ,Route} from "react-router-dom"
import {useState} from 'react'
import App from './App.jsx'
import LeftSidebar from "./components/Weather/LeftSidebar.jsx"
import './AllRoute.css'
import CityPage from "./components/Cities/CItyPage.jsx"

function AllRoute(){

    const [favouriteLocation,setFavouriteLocation] = useState([])
    const [favCity,setFavCity] = useState([])
    const [favStatus,setFavStatus] = useState([])


    return (
        <Router>
        <div className="app">
            <LeftSidebar/>
            <Routes>
                {favouriteLocation && <Route path="/"  element={<App favStatus={favStatus} setFavStatus={setFavStatus} favCity={favCity} setFavCity={setFavCity} favLocation={favouriteLocation} setFavLocation={setFavouriteLocation}/>}></Route>}
                <Route path="/cities" element={<CityPage favStatus={favStatus} setFavStatus={setFavStatus} favCity={favCity} setFavCity={setFavCity} favLocation={favouriteLocation} setFavLocation={setFavouriteLocation}/>}></Route>
            </Routes>
        </div>
    </Router>
    )
}

export default AllRoute