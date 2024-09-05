import React from 'react'
import logo from '../../Logo.png'
import { NavLink } from 'react-router-dom'
import '../../Style/RegisterResult.css'
function RegisterResult() {
    return (
        <div className='RegisterResult'>
            <div className='Register__header'>
                <div className='Register__header__wrapper'>
                    <div className='Register__nav'>
                        <div className='Register__logo'>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <NavLink className='Register__header__out__btn' to='/register'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="white" fillRule="evenodd" stroke="white" strokeLinejoin="round" strokeWidth={4} d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clipRule="evenodd"></path></svg>
                        <span>
                            Назад
                        </span>
                    </NavLink>
                </div>
            </div>
            <div className='RegisterResult__main'>
                <h1>
                    Заказ услуги поциента
                </h1>
                <div className='RegisterResult__main__item1__grid'>
                    <h2>
                        Поциент ID:
                    </h2>
                    <span>
                        569478
                    </span>
                </div>
                <div className='RegisterResult__main__item1__grid'>
                    <h2>
                        Ф.И.О:
                    </h2>
                    <span>
                        Шодиева Афруза 
                    </span>
                </div>
                <NavLink to='/registerCategory' className='RegisterReslt__main__btn'>
                    Добавить заказ  
                </NavLink>
                <div className='RegisterResult__main__item'>
                    <table>
                        <thead>
                            <tr>
                                <th className='RegisterResult__main__item__table__num'>
                                    <h3>
                                    No
                                    </h3>
                                </th>
                                <th>
                                    <h3>
                                        Названия услуги
                                    </h3>
                                </th>
                                <th>
                                    <h3>
                                        Количество
                                    </h3>
                                </th>
                                <th>
                                    <h3>
                                        Цена
                                    </h3>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h3>
                                        1
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        Спиной Масаж 
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        20
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        20.000 сум
                                    </h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='RegisterResult__main__item__end'>
                    <h3>
                        Итог:
                    </h3>
                    <h3>
                        20.000 сум
                    </h3>
                </div>
                <div className='RegisteResult__main__item__end__btn__wrapper'>
                <button className='RegisteResult__main__item__end__btn'>
                    Оформить заказ
                </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterResult