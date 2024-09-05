import React from 'react'
import '../Style/Error.css'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className='Error'>
        <div className='Error__wrapper'>
            <h1>
                Ошибка!
            </h1>
            <NavLink>
                Вернутся назад
            </NavLink>
        </div>
    </div>
  )
}

export default Error