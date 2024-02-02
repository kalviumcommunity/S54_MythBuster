import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route element={<Home/>}  path="/" />
      </Routes>
    </>
    )
}

export default App