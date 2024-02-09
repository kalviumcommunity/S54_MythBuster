import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import AddPost from "./components/AddPost"
import UpdatePost from "./components/UpdatePost"

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route element={<Home/>}  path="/" />
        <Route element={<AddPost/>}  path="/add" />
        <Route element={<UpdatePost/>}  path="/update/:id" />
      </Routes>
    </>
    )
}

export default App