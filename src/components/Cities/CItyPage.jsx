import CityMainPage from "./CityMainPage"
import CityRightSideBar from "./CityRightSideBar"

const CityPage = ({favStatus,setFavStatus,favCity,setFavCity,favLocation,setFavLocation})=>{
    return (
        <>
            <CityMainPage favStatus={favStatus} setFavStatus={setFavStatus} favCity={favCity} setFavCity={setFavCity} favLoc={favLocation} setFavLoc={setFavLocation}/>
            <CityRightSideBar/>
        </>
    )
}

export default CityPage