import {BrowserRouter as Router,Routes ,Route} from "react-router-dom"
import App from './App.jsx'

function AllRoute(){
    return (
        <Router>
        <div className="app">
            <Routes>
                <Route path="/" element={<App/>}></Route>
            </Routes>
        </div>
    </Router>
    )
}

export default AllRoute