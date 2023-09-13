import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Nav = () => {


return (
<div>

  <Link className='mx-4' to={'/Players'} >Players</Link>
  <Link className='mx-4' to={'/SlideShow'} >SlideShow</Link>
  <Link className='mx-4' to={'/SlideShow_orginal'} >SlideShow_orginal</Link>

  <Outlet />
</div>
)}
export default Nav
