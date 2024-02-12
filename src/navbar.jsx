import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div>
            <div>
                <Link to="/colorpalete">
                <h1>BrandName</h1>
                </Link>
                </div>
            <div >
            <div>State Color</div>
            <div>Colorpicker</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar