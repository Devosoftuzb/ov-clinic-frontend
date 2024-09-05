import React, { useState } from 'react'
import '../../Style/AdminHeader.css'
import logo from  '../../Logo.png'
import { NavLink, useLocation } from 'react-router-dom'
import Hamburger from 'hamburger-react'

function AdminHeader() {  
    const location = useLocation()
    const Home = location.pathname === '/admin'
    const Worker = location.pathname === '/workerAdmin'
    const Role = location.pathname === '/roleAdmin'
    const RegCat = location.pathname === '/regCatAdmin'
    const [Active, setActive] = useState(null)
    const SaidbarActive = ()=>{
        setActive(!Active)
    }
  return (
    <div className='AdminHeader'>
        <div className='AdminHeader__Wrapper'>
            <div className='hamburger' onClick={SaidbarActive}>
                <Hamburger color='white'/>
            </div>
        </div>
        <div className={`AdminSaidbar ${Active ? 'SaidbarActive' : ""}`}>
           <div className='AdminSaidbar__logo'>
                <img src={logo} alt="" />
           </div>
           <nav>
                <NavLink to='/admin' className={Home ? 'Saidbar__active' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"></path></svg>
                <span>
                    Глава
                </span>
                </NavLink>
                <NavLink to='/workerAdmin' className={Worker ? 'Saidbar__active' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path></svg>
                <span>
                    Сотрудники
                </span>
                </NavLink>
                <NavLink to='/roleAdmin' className={Role ? 'Saidbar__active' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="white" d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797c1.078.687 2.472 1.07 3.99 1.174l.365-1.198A5.5 5.5 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5zM19 14.5a4.5 4.5 0 0 1-6.681 3.937l-1.79.544a.41.41 0 0 1-.51-.51l.544-1.789A4.5 4.5 0 1 1 19 14.5M12.5 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm-.5 2.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5"></path></svg>
                <span>
                    Рабочие
                </span>
                </NavLink>
                <NavLink to='/regCatAdmin' className={RegCat ? 'Saidbar__active' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m10 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m7 0a4 4 0 1 1-3.995 4.2L13 17l.005-.2A4 4 0 0 1 17 13"></path></svg>
                <span>
                    Категория
                </span>
                </NavLink>
           </nav>
        </div>
    </div>
  )
}

export default AdminHeader