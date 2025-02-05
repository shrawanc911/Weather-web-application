import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCloudSun,faWind,faList,faMap,faSliders } from '@fortawesome/free-solid-svg-icons';
import './leftsidebar.css'
import { Link } from 'react-router-dom';

const LeftSidebar = ()=>{
    return (
        <div className="left-sidebar">
            <div className='main-app-icon'>
                <FontAwesomeIcon className='main-icons' icon={faWind} />
            </div>
            <ul className='left-side-bar-icons'>
                <Link to="/" style={{textDecoration:'None'}}>
                <li>
                <FontAwesomeIcon color='black' className='icons1' icon={faCloudSun} />
                    <p>Whether</p>
                    </li></Link>
                <li><FontAwesomeIcon color='black' className='icons2' icon={faList} />
                    <p>Cities</p></li>
                <li><FontAwesomeIcon color='black' className='icons3' icon={faMap}/><p>Map</p></li>
                <li><FontAwesomeIcon color='black' className='icons4' icon={faSliders}/><p>Settings</p></li>
            </ul>
        </div>
    )
}

export default LeftSidebar