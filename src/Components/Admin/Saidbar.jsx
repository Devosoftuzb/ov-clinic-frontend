import React from 'react'
import '../Style/Saidbar.css'
import { NavLink } from 'react-router-dom'

function Saidbar() {
  return (
    <div className='Saidbar'>
      <div className='Saidbar__header'>
        <h1>
          Logo
        </h1>
      </div>
      <div className='Saidbar__main'>
        <nav>
          <NavLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"></path></svg>
          <span>
            Глава
          </span>
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Saidbar