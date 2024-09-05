import React from 'react'
import logo from '../../Logo.png'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import '../../Style/DayDoctor.css'
function DayDoctor() {

    const location = useLocation()
    const isDoctor = location.pathname === '/doctorDay'

    return (
        <div className='DayDoctor'>
            <div className='Kassa__header'>
                <div className='Kassa__header__wrapper'>
                    <nav>
                        <div className='Kassa__logo'>
                            <img src={logo} alt="" />
                        </div>
                        <NavLink to='/doctor' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.09em" height="1em" viewBox="0 0 26 24"><path fill="white" d="M22.313 17.295a7.436 7.436 0 0 0-4.089-2.754l-.051-.011l-1.179 1.99a1.003 1.003 0 0 1-1 1c-.55 0-1-.45-1.525-1.774v-.032a1.25 1.25 0 1 0-2.5 0v.033v-.002c-.56 1.325-1.014 1.774-1.563 1.774a1.003 1.003 0 0 1-1-1l-1.142-1.994a7.47 7.47 0 0 0-4.126 2.746l-.014.019a4.475 4.475 0 0 0-.655 2.197v.007c.005.15 0 .325 0 .5v2a2 2 0 0 0 2 2h15.5a2 2 0 0 0 2-2v-2c0-.174-.005-.35 0-.5a4.522 4.522 0 0 0-.666-2.221l.011.02zM7.968 5.29c0 2.92 1.82 7.21 5.25 7.21c3.37 0 5.25-4.29 5.25-7.21v-.065a5.25 5.25 0 1 0-10.5 0v.068zm11.234 1.72c0 1.902 1.186 4.698 3.42 4.698c2.195 0 3.42-2.795 3.42-4.698v-.052a3.421 3.421 0 0 0-6.842 0v.055v-.003zm-19.2 1.6c0 1.902 1.186 4.698 3.42 4.698c2.195 0 3.42-2.795 3.42-4.698v-.052a3.421 3.421 0 0 0-6.842 0v.055v-.003z"></path></svg>
                            <span>
                                Поциенты
                            </span>
                        </NavLink>
                        <NavLink to='/doctorHistory'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" fillRule="evenodd" d="M5.079 5.069c3.795-3.79 9.965-3.75 13.783.069c3.82 3.82 3.86 9.993.064 13.788c-3.795 3.795-9.968 3.756-13.788-.064a9.812 9.812 0 0 1-2.798-8.28a.75.75 0 1 1 1.487.203a8.312 8.312 0 0 0 2.371 7.017c3.245 3.244 8.468 3.263 11.668.064c3.199-3.2 3.18-8.423-.064-11.668c-3.243-3.242-8.463-3.263-11.663-.068l.748.003a.75.75 0 1 1-.007 1.5l-2.546-.012a.75.75 0 0 1-.746-.747L3.575 4.33a.75.75 0 1 1 1.5-.008zm6.92 2.18a.75.75 0 0 1 .75.75v3.69l2.281 2.28a.75.75 0 1 1-1.06 1.061l-2.72-2.72V8a.75.75 0 0 1 .75-.75" clipRule="evenodd"></path></svg>
                            <span>
                                История
                            </span>
                        </NavLink>
                        <NavLink to='/doctorDay' className={isDoctor ? 'button__link' : ''} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M5 17q-.825 0-1.412-.587T3 15V9q0-.825.588-1.412T5 7h14q.825 0 1.413.588T21 9v6q0 .825-.587 1.413T19 17zM3.975 5q-.425 0-.7-.288T3 4t.288-.712T4 3h16.025q.425 0 .7.288T21 4t-.288.713T20 5zm0 16q-.425 0-.7-.288T3 20t.288-.712T4 19h16.025q.425 0 .7.288T21 20t-.288.713T20 21z"></path></svg>
                            <span>
                                За сегодня
                            </span>
                        </NavLink>
                    </nav>
                    <button className='Register__header__out__btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M124 216a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H60v152h52a12 12 0 0 1 12 12m108.49-96.49l-40-40a12 12 0 0 0-17 17L195 116h-83a12 12 0 0 0 0 24h83l-19.52 19.51a12 12 0 0 0 17 17l40-40a12 12 0 0 0 .01-17"></path></svg>
                        <span>
                            Выйти
                        </span>
                    </button>
                </div>
            </div>
            <div className='DayDoctor__main'>
                <div className='DayDoctor__main__content'>
                    <h1>
                        За сегодня:
                    </h1>
                    <div className='DayDoctor__grid'>
                        <h3>
                            Сегодняшняя очередь:
                        </h3>
                        <span>
                            65
                        </span>
                    </div>
                    <div className='DayDoctor__grid'>
                        <h3>
                            Осмотренных:
                        </h3>
                        <span>
                            15
                        </span>
                    </div>
                    <div className='DayDoctor__grid'>
                        <h3>
                           Не осмотренных:
                        </h3>
                        <span>
                            50
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DayDoctor