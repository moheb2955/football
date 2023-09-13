import React from 'react'
import Nav from './routes/Nav'
import Players from './routes/Players'
import { Route, Routes } from 'react-router'
import SlideShow from './routes/SlideShow'
import SlideShow_orginal from './routes/SlideShow copy'


const App = () => {
return (
  <>
  {/* <Nav/> */}
  <Routes>      
    <Route path='/' element={<Nav/>}>
      <Route path='Players' element={<Players />} />
      <Route path='SlideShow' element={<SlideShow />} />
      <Route path='SlideShow_orginal' element={<SlideShow_orginal />} />
    </Route>

    {/* 
    <Route path='' element='' />
    <Route path='' element={< />} />
    <Route path='' element={< />} />
    <Route path='' element={< />} />
    <Route path='' element={< />} />
    <Route path='' element={< />} /> 
    */}
  </Routes>
  </>
)}
export default App
