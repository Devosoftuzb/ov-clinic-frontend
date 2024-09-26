import React, { useState } from 'react'
import '../../Style/RegisterHeader.css'
import '../../Style/Register.css'
import logo from '../../Logo.png'
import { NavLink } from 'react-router-dom'

function RegisterHome() {
  // THESE WERE USED FOR HTML structure
  const [active, setActive] = useState(1)
  const openModal = (modalNumber) => {
    setActive(modalNumber);
  };

  const [isNazChecked, setIsNazChecked] = useState(false);
  const handleNazChange = (event) => {
    setIsNazChecked(event.target.checked);
  };
  const [iskskidChecked, setIskskidChecked] = useState(false);
  const handlekskidChange = (event) => {
    setIskskidChecked(event.target.checked);
  };
  let skidka_presents = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

  // THESE HAVE BEEN USED FOR HTML structure.

  // THERE WERE USED AS fake API

  let historyPatent = Array.from({ length: 15 }, (y = 30, x) => x + 1 + y);
  let doctors = Array.from({ length: 30 }, (y, x) => x + 1+ y);
  let rooms = Array.from({ length: 32 }, (y, x) => x + 1 + y);
  let in_room = {
    name: "1-qavat, 23-xona",
    floor: 1,
    number: 23,
    amount: 5,
    available: 3,
  }

  return (
    <div className='RegisterHome'>
      <div className='Register__header'>
        <div className='Register__header__wrapper'>
          <div className='Register__nav'>
            <div className='Register__logo'>
              <img src={logo} alt="" />
            </div>
            <button onClick={() => openModal(1)} className={active === 1 ? "activeBtn" : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path></svg>
              <span>
                <span>Добавить</span>  Амбулатор
              </span>
            </button>
            <button onClick={() => openModal(3)} className={active === 3 ? "activeBtn" : ''}>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path></svg> */}
              <svg style={{ scale: '1.5' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="white" d="M21 10h-8V7h-2v3H3c-.55 0-1 .45-1 1v6h2v-2h16v2h2v-6c0-.55-.45-1-1-1zm-2 3h-5v-2h5v2zm-10 2h5v2h-5v-2zm0-2h5v-2h-5v2z" />
                <path fill="white" d="M15 4h2v2h2v2h-2v2h-2V8h-2V6h2z" />
              </svg>


              <span>
                <span>Добавить</span>  Стационар
              </span>
            </button>
            <button onClick={() => openModal(2)} className={active === 2 ? "activeBtn" : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="m.427 1.927l1.215 1.215a8.002 8.002 0 1 1-1.6 5.685a.75.75 0 1 1 1.493-.154a6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177M7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.75.75 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4"></path></svg>
              <span>
                История
              </span>
            </button>
          </div>
          <button className='Register__header__out__btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M124 216a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H60v152h52a12 12 0 0 1 12 12m108.49-96.49l-40-40a12 12 0 0 0-17 17L195 116h-83a12 12 0 0 0 0 24h83l-19.52 19.51a12 12 0 0 0 17 17l40-40a12 12 0 0 0 .01-17"></path></svg>
            <span>
              Выйти
            </span>
          </button>
        </div>
      </div>
      <div className='RegisterMain'>
        {active === 1 && (
          <div className='RegisterForm register_ambulator_form'>
            <form>
              <h2>Добавить поциента</h2>
              <label htmlFor="fullname">
                <span>Полное имя:</span>
                <input type="text" id='fullname' />
              </label>
              <label htmlFor="Date">
                <span>Год рождения:</span>
                <input type="date" id='date' />
              </label>
              <label htmlFor="adres">
                <span>Адрес:</span>
                <input type="text" id='adres' />
              </label>
              <label htmlFor="tele">
                <span>Телефон номер:</span>
                <input type="number" id='tele' />
              </label>
              <label htmlFor="Passport">
                <span>Пасспорт:</span>
                <input type="text" id='Passport' />
              </label>
              <label htmlFor="tf">
                <span>Иногородный:</span>
                <input className='RegisterForm__tf' type="checkbox" id="tf" />
              </label>
              <label htmlFor="naz">
                <span>Назначения:</span>
                <input className='RegisterForm__tf' type="checkbox" id="naz" onChange={handleNazChange} />
              </label>
              {isNazChecked && (
                <label htmlFor="id">
                  <span>ID доктора:</span>
                  <input type="number" id='id' />
                </label>
              )}
              <NavLink to='/registerCategory'>
                <button type='submit'>Добавить</button>
              </NavLink>
            </form>
          </div>
        )}
        {active === 2 && (
          <div>
            <div className='Register__history__header'>
              <div className='register_history_form'>
                <h1>Поиск по историй </h1>
                <label htmlFor="Search">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"></path></svg>
                  </button>
                  <input placeholder='Поиск...' id='Search' type="text" />
                </label>
              </div>
              <div className="register_history_from">
                <h1>Поиск по дате</h1>
                <label htmlFor="sort_by_date">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"></path></svg>
                  </button>
                  <input placeholder='Enter date' id='sort_by_date' type="date" />
                </label>
              </div>
              <div className="register_history_from">
                <h1>Фильтр по тип</h1>
                <label htmlFor="filter_by_tip">
                  <select id='filter_by_tip'>
                    <option value="1">Амбулатор</option>
                    <option value="2">Стационар</option>
                    <option value="3">Все</option>
                  </select>
                </label>
              </div>
            </div>

            <div className='Register__history__table'>
              <table>
                <thead>
                  <tr>
                    <th className='Register__table__number'>
                      <h3>
                        #
                      </h3>
                    </th>
                    <th>
                      <h3>
                        Ф.И.О
                      </h3>
                    </th>
                    <th>
                      <h3>
                        Дата
                      </h3>
                    </th>
                    <th className='Register__table__setings2'>
                      <h3>
                        Настройки
                      </h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {historyPatent?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <h3>
                            {item}
                          </h3>
                        </td>
                        <td>
                          <h3>
                            Шодиева Гулсара
                          </h3>
                        </td>
                        <td>
                          <h3>
                            22-02-2024
                          </h3>
                        </td>
                        <td>
                          <div className='Register__table__setings'>
                            <NavLink to='/registerCustomerProfile'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 18H9.25a5.25 5.25 0 1 1 0-10.5H19M16.5 4L20 7.5L16.5 11"></path></svg>
                            </NavLink>
                          </div>
                        </td>
                      </tr>
                    )
                  })}

                </tbody>
              </table>
            </div>
            <div className="register_history_pagin">
              <div className="container_pagin">
                <div className="register_history_wrap">
                  <button type="button">предыдущий</button>
                  <div className="pagin_left_icon"></div>
                  <p> <span>страница:</span> 3/12</p>
                  <div className="pagin_right_icon"></div>
                  <button type="button">следующий</button>
                </div>
              </div>
            </div>
          </div>
        )}
        {active === 3 && (
          <div>
            <div className='RegisterForm'>
              <h2>Добавить поциента</h2>
              <form>
                <div className="register_statsionar_wrap">
                  <div>
                    <label htmlFor="fullname">
                      <span>Полное имя:</span>
                      <input type="text" id='fullname' />
                    </label>
                    <label htmlFor="Date">
                      <span>Год рождения:</span>
                      <input type="date" id='date' />
                    </label>
                    <label htmlFor="adres">
                      <span>Адрес:</span>
                      <input type="text" id='adres' />
                    </label>
                    <label htmlFor="tele">
                      <span>Телефон номер:</span>
                      <input type="number" id='tele' />
                    </label>
                    <label htmlFor="Passport">
                      <span>Пасспорт:</span>
                      <input type="text" id='Passport' />
                    </label>

                  </div>
                  <div>

                    <label htmlFor="tele">
                      <span>Выбор палаты:</span>
                      <select name="" id="">
                        {rooms?.map((room, index) => {
                          return (
                            <option key={index} value={index}>{index + 1}. {in_room.floor}-qavat, {in_room.number}-xona</option>
                          )
                        })}
                      </select>
                    </label>
                    <label htmlFor="tele">
                      <span>Выбор врача:</span>
                      <select name="" id="">
                        {doctors?.map((doctor, index) => {
                          return (
                            <option key={index} value={index}>{index + 1}. Umarov Shavkat Bobomurodovich</option>
                          )
                        })}
                      </select>
                    </label>
                    <label htmlFor="Date">
                      <span>С какого числа:</span>
                      <input type="date" id='date' />
                    </label>
                    <label htmlFor="Date">
                      <span>По какое число:</span>
                      <input type="date" id='date' />
                    </label>
                  </div>
                </div>
                <div className="register_checkbox_grid">
                  <div>
                    <label htmlFor="tf">
                      <span>Иногородный:</span>
                      <input className='RegisterForm__tf' type="checkbox" id="tf" />
                    </label>
                    <label htmlFor="naz">
                      <span>Назначения:</span>
                      <input className='RegisterForm__tf' type="checkbox" id="naz" onChange={handleNazChange} />
                    </label>
                    {isNazChecked && (
                      <label htmlFor="id">
                        <span>ID доктора:</span>
                        <input type="number" id='id' />
                      </label>
                    )}
                  </div>
                  <div>
                    <label htmlFor="partnyor">
                      <span>Сопровождающий:</span>
                      <input className='RegisterForm__tf' type="checkbox" id="partnyor" />
                    </label>
                    <label htmlFor="skid">
                      <span>Скидка:</span>
                      <input className='RegisterForm__tf' type="checkbox" id="skid" onChange={handlekskidChange} />
                    </label>
                    {iskskidChecked && (
                      <label htmlFor="id">
                        <span>Процент скидки:</span>
                        <select>
                          {skidka_presents?.map((item) => {
                            return (
                              <option key={item} value="">{item} %</option>
                            )
                          })}
                        </select>
                      </label>
                    )}
                  </div>
                </div>
                <div className='register_statsionar_btns'>
                  <button type="button">Добавить Стационар</button>
                  <NavLink to='/registerCategory'>
                    <button type='submit'>Добавить</button>
                  </NavLink>
                </div>
              </form>

            </div>
          </div>
        )}
      </div>
    </div >
  )
}

export default RegisterHome