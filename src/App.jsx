import Home from "./pages/home/Home";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

function App() {
  const user = true;
  return (
        <Router>
          <Routes>
            <Route exact path="/" element={user?<Home/>:<Navigate to="/register"/>}></Route>
            <Route path="/register" element={!user?<Register/>:<Navigate to="/"/>}></Route>
            <Route path="/login" element={!user?<Login/>:<Navigate to="/"/>}></Route>
            {
              user && (
                <>
                <Route path="/movies" element={<Home type="movies"></Home>}></Route>
                <Route path="/series" element={<Home type="series"></Home>}></Route>
                <Route path="/watch" element={<Watch></Watch>}></Route>
                </>
              )
            }
            
          </Routes>
        </Router>
  );
}

export default App;
