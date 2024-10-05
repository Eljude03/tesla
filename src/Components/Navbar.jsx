import React from 'react'
import logo from '../images/tesla.svg'

const Navbar = () => {
  return (
    <div className='navbar '>
      <div>testing update</div>
        <img src={logo} alt="tesla logo" className='h-6' />
        <div className='hidden lg:block '>
            <a href="#model-s" className="navLink">Model S</a>
            <a href="#model-3" className="navLink">Model 3</a>
            <a href="#model-x" className="navLink">Model X</a>
            <a href="#model-y" className="navLink">Model Y</a>
            <a href="#model-roof" className="navLink">Model Roof</a>
            <a href="#model-panels" className="navLink">Model Panels</a>
        </div>
        <div className='flex'>
            <a href="#shop" className="navLink hidden lg:block">Shop</a>
            <a href="#account" className="navLink hidden lg:block">Account</a>
            <a href="#menu" className="navLink">Menu</a>
        </div>
    </div>
  )
}

export default Navbar

