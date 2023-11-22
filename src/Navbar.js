import React from 'react'
import { FiMoon } from 'react-icons/fi'
import { CiLogin } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'
import { TbMenuDeep } from 'react-icons/tb'
import './Navbar.css'


export default function Navbar() {
    return (
        <div className='container'>

            <div className='navbar'>

                <div className='logo'>
                    <div className='a'>
                        <span>C</span>ode
                        <span>H</span>elp
                    </div>
                </div>


                <div className='menu-links'>
                    <ul>
                        <li><a>About Us</a></li>
                        <li><a>Courses</a></li>
                        <li className='unique'><a>Labs</a><span><IoIosArrowDown size={14}/></span>
                        <div className='lab-menu'>
                                <h2>imp links</h2>
                            </div></li>
                        <li><a>Contact</a></li>
                    </ul>

                </div>

                <div className='buttons-link'>

                    <button className='dashboard'>

                        dashboard

                    </button>

                    <button className='login'>

                        login <span><CiLogin className="login-icon" size={17} /></span>

                    </button>

                    <a className='menu'>

                        <TbMenuDeep size={29} />

                    </a>

                    <a className='mode'>

                        <FiMoon size={23} />

                    </a>
                </div>

                <div className='toggle-menu'>

                    <ul className='toggle-menu-lists'>
                        <li><a>About us</a></li>
                        <li><a>Courses</a></li>
                        <li><a>Labs</a></li>
                        <li><a>Contact</a></li>
                    </ul>

                    <div className='toggle-menu-buttons'>

                    <button className='dashboard'>

                        dashboard

                    </button>

                    <button className='login'>

                        login <span><CiLogin className="login-icon" size={17} /></span>

                    </button>

                    </div>

                </div>

            </div>

        </div>

    )
}
