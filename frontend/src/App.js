import { Navigation } from "./component/navigations";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Login from "./component/Login";
import Logout from "./component/Logout";


const App = () => {
    return (
        <Router>

            <Navigation />
            
            <Routes>
                <Route exact path="/" element={< Home />} />
                <Route path="/user/login/" element={<Login />} />
                <Route path="/user/logout/" element={< Logout />} />

            </Routes>
        </Router >

    )
}
export default App;