import './CityRightSideBar.css'

const CityRightSideBar = ()=>{
    return (
        <>
            <div className="city-right">
                <div className="city-right-main">
                    <div className="city-right-main-data">
                        <p className='city-right-main-data-p1'>Madrid</p>
                        <p className='city-right-main-data-p2'>Chance of rain:0%</p>
                        <p className='city-right-main-data-p3'>31</p>
                    </div>
                    <div className="city-right-main-image">
                        <img src="images/Day/0.png" alt="" height="125px" width="125px"/>
                    </div>
                </div>
                <div className="city-right-forcast">
                    <div className="city-right-forcast-today">
                        <p>TODAY'S FORCAST</p>
                    </div>
                    <div className="city-right-forcast-data">
                        <div className="city-right-forcast-data-d1">
                            <p className='city-right-forcast-data-d1-p1'>6:00 AM</p>
                            <img src="images/Day/0.png" alt="" width="50px" height="50px"/>
                            <p className='city-right-forcast-data-d1-p2'>25</p>
                        </div>
                        <div className="city-right-forcast-data-d1">
                        <p className='city-right-forcast-data-d1-p1'>9:00 AM</p>
                            <img src="images/Day/0.png" alt="" width="50px" height="50px"/>
                            <p className='city-right-forcast-data-d1-p2'>25</p>
                        </div>
                        <div className="city-right-forcast-data-d1" id='last-div-forcast'>
                        <p className='city-right-forcast-data-d1-p1'>12:00 PM</p>
                            <img src="images/Day/0.png" alt="" width="50px" height="50px"/>
                            <p className='city-right-forcast-data-d1-p2'>25</p>
                        </div>
                    </div>
                </div>
                <div className="city-right-3-day-forcast">
                    <div className="city-right-3-day-forcast-header">
                    <p>3-DAY FORCAST</p>
                    
                    <div className="city-right-3-day-forcast-data">
                        <div className="city-right-3-day-forcast-data-d1">
                        <div className="city-right-3-day-forcast-data-p1">
                            <p>Today</p>
                        </div>
                        <div className="city-right-3-day-forcast-data-img">
                            <img src="images/Day/0.png" alt="" height="30px" width="30px"/>
                        </div>
                        <div className="city-right-3-day-forcast-data-name">
                            <p>Sunny</p>
                        </div>
                        <div className="city-right-3-day-forcast-data-p2">
                            <p>27/36</p>
                        </div>
                        </div>
                        <div className="city-right-3-day-forcast-data-d1">
                        <div className="city-right-3-day-forcast-data-p1">
                            <p>Wednesday</p>
                        </div>
                        <div className="city-right-3-day-forcast-data-img">
                            <img src="images/Day/0.png" alt="" height="30px" width="30px"/>
                        </div>
                        <div className="city-right-3-day-forcast-data-name">
                            <p>Partial Cloudy</p>
                        </div>
                        <div className="city-right-3-day-forcast-data-p2">
                            <p>27/36</p>
                        </div>
                        </div>
                        <div className="city-right-3-day-forcast-data-d1" id='last-3-day-forcast'>
                        <div className="city-right-3-day-forcast-data-p1">
                            <p>Saturday</p>
                        </div>
                        <div className="city-right-3-day-forcast-data-img">
                            <img src="images/Day/0.png" alt="" height="30px" width="30px"/>
                        </div>
                        <div className="city-right-3-day-forcast-data-name">
                            <p>clear</p>
                        </div>
                        <div className="city-right-3-day-forcast-data-p2">
                            <p>27/36</p>
                        </div>
                        </div>
                    </div>
                    </div>
                        </div>
            </div>
        </>
    )
}

export default CityRightSideBar
