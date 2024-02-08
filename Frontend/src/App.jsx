import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import AddPost from "./components/AddPost"

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route element={<Home/>}  path="/" />
        <Route element={<AddPost/>}  path="/add" />
      </Routes>
    </>
    )
}

export default App