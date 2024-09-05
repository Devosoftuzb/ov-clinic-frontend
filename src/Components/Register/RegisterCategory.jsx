import React from 'react'
import logo from '../../Logo.png'
import '../../Style/RegisterCategory.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterCategory() {
    const buttonsData = Array.from({ length: 30 }, (v, i) => ({
        num: i + 1,
        label: 'Анализ крови'
    }));
    const analiz = Array.from({ length: 5 }, (v = 7000, i) => ({
        sum: i + 10000 + v,
        label: 'Анализ крови група'
    }))
    const [showFirstTable, setShowFirstTable] = useState(true);

    const handleRowClick = () => {
        setShowFirstTable(false);
    };
    const handleRowClick2 = () => {
        setShowFirstTable(true)
    }
    const navigate = useNavigate();

    const handleRowClick3 = () => {
        navigate('/registerResult');
    };
    return (
        <div className='RegisterCategory'>
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
            <div className='RegisterCategory__main'>
                <div className='RegisterCategory__main__item1'>
                    <h1>
                        Виды анализа
                    </h1>
                    <div className='RegisterCategory__main__item'>
                        <div className='RegisterCategory__main__item__btn'>
                            {buttonsData.map((button, index) => (
                                <button key={index}>
                                    <span className='RegCategory__btn__num'>
                                        {button.num}
                                    </span>
                                    <span className='RegCategory__btn__slov'>
                                        {button.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='RegisterCategory__main__item2'>
                    <div className='RegisterCategory__main__item2__wrapper'>
                        <h1>
                            Доктор
                        </h1>
                        {showFirstTable === false ? (
                            <button className='Register__main__out__btn2' onClick={handleRowClick2} >
                                <svg className='Register__main__out__btn2__svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fillRule="evenodd" strokeLinejoin="round" strokeWidth={4} d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clipRule="evenodd"></path></svg>
                                <span>
                                    Назад
                                </span>
                            </button>
                        ) : (
                            <button>
                                
                            </button>
                        )}
                    </div>
                    <div className='RegisterCategory__main__item mobile__item'>
                        {showFirstTable ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            <h3>Названия услуги</h3>
                                        </th>
                                        <th className='RegisterCategory__main__item__price'>
                                            <h3>Цена</h3>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {analiz.map((item, index) => (
                                        <tr key={index} onClick={handleRowClick}>
                                            <td>
                                                <h3>{item.label} {index+1}</h3>
                                            </td>
                                            <td>
                                                <h3 className='RegisterCategory__main__item__price2'>
                                                    {item.sum} сум
                                                </h3>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <table className='RegisterCategory__main__item__doc'>
                                <thead>
                                    <tr >
                                        <th className='RegisterCategory__main__item__FIO'>
                                            <h3>Ф.И.О</h3>
                                        </th>
                                        <th>
                                            <h3>Специальность</h3>
                                        </th>
                                        <th>
                                            <h3>Кабинет</h3>
                                        </th>
                                        <th>
                                            <h3>В очереди</h3>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr onClick={handleRowClick3}>
                                        <td>
                                            <h3>Хусанов Алишер Файз</h3>
                                        </td>
                                        <td>
                                            <h3>Доктор</h3>
                                        </td>
                                        <td>
                                            <h3>1-этаж 23 комната</h3>
                                        </td>
                                        <td>
                                            <h3>60</h3>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterCategory