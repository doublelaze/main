import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Conponents/Home"
import Users from "./Conponents/Users"
import Stocks from "./Conponents/Stocks"



const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stocks" element={<Stocks />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
