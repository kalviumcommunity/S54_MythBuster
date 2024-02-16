import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import AddPost from "./components/AddPost"
import UpdatePost from "./components/UpdatePost"
import Login from "./components/Login"
import Signup from "./components/Signup"
import FilterUser from "./components/FilterUser"

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route element={<Home/>}  path="/" />
        <Route element={<AddPost/>}  path="/add" />
        <Route element={<UpdatePost/>}  path="/update/:id" />
        <Route element={<Login/>}  path="/login" />
        <Route element={<Signup/>}  path="/signup" />
        <Route element={<FilterUser/>}  path="/filter" />
      </Routes>
    </>
    )
}

export default App