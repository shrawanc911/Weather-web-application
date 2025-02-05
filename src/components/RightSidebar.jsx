import './rightsidebar.css'
import {useEffect, useState} from 'react'
const RightSideBar = ()=>{

    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [city, setCity] = useState(null);

    
    return (
        <div className="right-side-bar">
            <div className="right-side-bar-main">
                <p>7 - DAY FORCAST</p>
                <div className="rightsidebar-data">
                <div className='rightsidebar-data-p1'><p>Today</p></div>
                
                <div className="rightsidebar-data-img">
                <img src="/images/Day/sunwithrain.png" alt="image" height="50px" width="50px" />
                </div>
                <div className="rightsidebar-forcast-name"><p>Sunny</p></div>
                <div className="rightsidebar-data-p2"><p><span>36</span>/22</p></div>
            </div>  
            <div className="rightsidebar-data">
                <div className='rightsidebar-data-p1'><p>Tuesday</p></div>
                
                <div className="rightsidebar-data-img">
                <img src="/images/Day/cloudsun2.png" alt="image" height="50px" width="50px" />
                </div>
                <div className="rightsidebar-forcast-name"><p>Sunny</p></div>
                <div className="rightsidebar-data-p2"><p><span>36</span>/22</p></div>
            </div>  
            <div className="rightsidebar-data">
                <div className='rightsidebar-data-p1'><p>Wednesday</p></div>
                
                <div className="rightsidebar-data-img">
                <img src="/images/Day/raining.png" alt="image" height="50px" width="50px" />
                </div>
                <div className="rightsidebar-forcast-name"><p>Sunny</p></div>
                <div className="rightsidebar-data-p2"><p><span>36</span>/22</p></div>
            </div>  
            <div className="rightsidebar-data">
                <div className='rightsidebar-data-p1'><p>Thrusday</p></div>
                
                <div className="rightsidebar-data-img">
                <img src="/images/Day/sun2.png" alt="image" height="50px" width="50px" />
                </div>
                <div className="rightsidebar-forcast-name"><p>Sunny</p></div>
                <div className="rightsidebar-data-p2"><p><span>36</span>/22</p></div>
            </div>  
            <div className="rightsidebar-data">
                <div className='rightsidebar-data-p1'><p>Friday</p></div>
                
                <div className="rightsidebar-data-img">
                <img src="/images/Day/sunwithrain.png" alt="image" height="50px" width="50px" />
                </div>
                <div className="rightsidebar-forcast-name"><p>Sunny</p></div>
                <div className="rightsidebar-data-p2"><p><span>36</span>/22</p></div>
            </div>  
            <div className="rightsidebar-data">
                <div className='rightsidebar-data-p1'><p>Saturday</p></div>
                
                <div className="rightsidebar-data-img">
                <img src="/images/Day/cloudsun2.png" alt="image" height="50px" width="50px" />
                </div>
                <div className="rightsidebar-forcast-name"><p>Sunny</p></div>
                <div className="rightsidebar-data-p2"><p><span>36</span>/22</p></div>
            </div>  
            <div className="rightsidebar-data last-data">
                <div className='rightsidebar-data-p1'><p>Sunday</p></div>
                
                <div className="rightsidebar-data-img">
                <img src="/images/Day/cloud.png" alt="image" height="50px" width="50px" />
                </div>
                <div className="rightsidebar-forcast-name"><p>Sunny</p></div>
                <div className="rightsidebar-data-p2"><p><span>36</span>/22</p></div>
            </div>  
            
            </div>
        </div>
    )
}

export default RightSideBar