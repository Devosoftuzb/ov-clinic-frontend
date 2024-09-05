import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../Style/KassaHome.css'
import { useLocation } from 'react-router-dom'
import logo from '../../Logo.png'
function KassaBack() {

  // HTML structure
  const [isModal, setModal] = useState(true)
  const openModal = () => {
    setModal(false)
  }
  const closeModal = () => {
    setModal(true)
  }
  const location = useLocation()
  const isKassaBack = location.pathname === '/kassaBack'
  
  // API fake
  let patentsPayTrue = Array.from({ length: 15 }, (y, x) => x + 1 + y);

  return (
    <div className='Kassa'>
      <div className='Kassa__header'>
        <div className='Kassa__header__wrapper'>
          <nav>
            <div className='Kassa__logo'>
              <img src={logo} alt="" />
            </div>
            <NavLink to='/kassa' >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="white" d="M10.25 9A6.25 6.25 0 0 0 4 15.25v3.25h40v-3.25A6.25 6.25 0 0 0 37.75 9zM4 32.75V21h40v11.75A6.25 6.25 0 0 1 37.75 39h-27.5A6.25 6.25 0 0 1 4 32.75m27.25-3.25a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5z"></path></svg>
              <span>
                Оплата
              </span>
            </NavLink>
            <NavLink to='' className={isKassaBack ? 'button__link' : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 96a8 8 0 0 1-8 8H99.31l10.35 10.34a8 8 0 0 1-11.32 11.32l-24-24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L99.31 128H168v-24a8 8 0 0 1 16 0Z"></path></svg>
              <span>
                Возврат
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
      <div className='Kassa__main'>
        {isModal === true && (
          <div>
            <div className='Kassa__main__search'>
              <h1>
                Оплаченые заказы
              </h1>
              <form>
                <label htmlFor="Search">
                  <button>
                    <svg className='Kassa__main__search__svg1' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"></path></svg>
                  </button>
                  <input placeholder='Поиск...' id='Search' type="text" />
                </label>
                <button className='Kassa__main__search__btn' type='submit'>
                  <svg className='Kassa__main__search__svg2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"></path></svg>
                  <span className='Kassa__main__search__btn__span'>
                    Искать
                  </span>
                </button>
              </form>
            </div>
            <div className='Kassa__main__table'>
              <table>
                <thead>
                  <tr >
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
                    <th>
                      <h3>
                        № Заказа
                      </h3>
                    </th>
                    <th>
                      <h3>
                        Статус
                      </h3>
                    </th>
                    <th className='Register__table__setings2'>
                      <h3>
                        Сумма
                      </h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {patentsPayTrue?.map((item, index) => {
                    return (
                      <tr key={index} onClick={openModal}>
                        <td>
                          <h3>
                            1
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
                          <h3>
                            223556
                          </h3>
                        </td>
                        <td>
                          <h3 className='IsMoney'>
                            Оплачено
                          </h3>
                          {/* <h3 className='setmoney'>
                        Не оплачено
                      </h3> */}
                        </td>
                        <td>
                          <h3>
                            20,000 сум
                          </h3>
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
                    <p>страница: <span>3</span>  /12</p>
                    <button type="button">следующий</button>
                  </div>
              </div>
            </div>
          </div>
        )}
        {isModal === false && (
          <div>
            <div className='Kassa__info__header'>
              <h1>
                Кабинет пациента
              </h1>
              <button className='Kass__info__header__btn' onClick={closeModal}>
                <svg className='Register__main__out__btn2__svg2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fillRule="evenodd" strokeLinejoin="round" strokeWidth={4} d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clipRule="evenodd"></path></svg>
                <span className='Kass__info__header__btn__span'>
                  Назад
                </span>
              </button>
            </div>
            <div className='Kassa__info'>
              <div className='Kassa__info__grid'>
                <h3>
                  Ф.И.О:
                </h3>
                <span>
                  Рустамов Одилбек
                </span>
              </div>
              <div className='Kassa__info__grid'>
                <h3>
                  Дата:
                </h3>
                <span>
                  22-02-2024
                </span>
              </div>
              <div className='Kassa__info__grid'>
                <h3>
                  Номер заказа:
                </h3>
                <span>
                  526452
                </span>
              </div>
              <div className='Kassa__info__grid'>
                <h3>
                  Статус:
                </h3>
                <span className='Kassa__info__grid__money2'>
                  Оплачено
                </span>
              </div>
              <div className='Kassa__info__grid'>
                <h3>
                  Сумма:
                </h3>
                <span>
                  20,000 сум
                </span>
              </div>
              <button className='Kassa__info__submit'>
                Вернуть
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default KassaBack