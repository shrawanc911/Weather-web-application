import CityMainPage from "./CityMainPage"

const CityPage = ({favStatus,setFavStatus,favCity,setFavCity,favLocation,setFavLocation})=>{
    return (
        <>
            <CityMainPage favStatus={favStatus} setFavStatus={setFavStatus} favCity={favCity} setFavCity={setFavCity} favLoc={favLocation} setFavLoc={setFavLocation}/>
        </>
    )
}

export default CityPage