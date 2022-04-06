import React from 'react'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import About from './About'
import Home from './Home';
import Service from './Service';




const MainRouting = () => {
  return (      
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/service" element={<Service/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default MainRouting;