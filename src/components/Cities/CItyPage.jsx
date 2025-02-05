import CityMainPage from "./CityMainPage"

const CityPage = ({favLocation,setFavLocation})=>{
    return (
        <>
            <CityMainPage favLoc={favLocation} setFavLoc={setFavLocation}/>
        </>
    )
}

export default CityPage