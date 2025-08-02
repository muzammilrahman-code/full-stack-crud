import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Update from "./pages/Update"
import Create from "./pages/Create"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
