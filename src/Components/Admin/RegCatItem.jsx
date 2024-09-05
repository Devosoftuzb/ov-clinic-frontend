import React from 'react'
import '../../Style/RegCatItem.css'
import logo from '../../Logo.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
function RegCatItem() {
    const rows = Array.from({ length: 19 }, (_, index) => index + 1);
    const [active, setActive] = useState()
    const [change, setChange] = useState()
    const [delate, setDelete] = useState()
    const createWorker =()=>{
        setActive(!active)
    }
    const editWorker = ()=>{
        setChange(!change)
    }
    const deleteWorker =()=>{
        setDelete(!delate)
    }
  return (
    <div className='RegCatItem'>
        <div className='RegCatItem__header'>
            <div className='RegCatItem__header__wrapper'>
                <div >
                <img className='RegCatItem__header__logo' src={logo} alt="" />
               
                </div>
                <div className='RegCatItem__header__wrapper__grdi'>
                <button onClick={createWorker} className='RegCatItem__btn'>
                    <svg className='RegCatItem__btn__svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path  d="M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6H5v-4h4ZM20 3h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 6h-4V5h4Zm1 7h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M9 9H5V5h4Z"></path></svg>
                    <span>
                        Создать 
                    </span>
                </button>
                <NavLink className='Kass__info__header__btn ' to='/regCatAdmin'>
                <svg className='Register__main__out__btn2__svg2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fillRule="evenodd" strokeLinejoin="round" strokeWidth={4} d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clipRule="evenodd"></path></svg>
                <span className='Kass__info__header__btn__span'>
                  Назад
                </span>
                </NavLink>
                </div>
            </div>
        </div>
        <div className='RegCatItem__main'>
        <div className='Kassa__main__search adminRegCat'>
              <h2>
                Поиск
              </h2>
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
            <div className='Admin__main__table RegCat__table'>
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
                        Название
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
                 {rows.map((row)=>(
                     <tr key={row}>
                     <td>
                       <h3>
                         {row}
                       </h3>
                     </td>
                     <td>
                       <h3>
                         Анализ крови 
                       </h3>
                     </td>
                     <td>
                       <div  className='Register__table__setings'>
                       <button onClick={editWorker} className='Admin__main__table__edit'>
                         <svg className='Admin__main__table__edit__svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM21.41 6.34l-3.75-3.75l-2.53 2.54l3.75 3.75z"></path></svg>
                         </button>

                         <button onClick={deleteWorker} className='Admin__main__table__delete'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path  d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"></path></svg>
                         </button>
                       </div>
                     </td>
                   </tr>
                 ))}
                </tbody>
              </table>
            </div>
        </div>
         {/* Создавание начало  */}
         <div className={`Admin__modal__bg ${active ? 'Admin__modal__active' : ''}`}>
            <div className='Admin__modal__content'>
                <div className='Admin__modal__content__header'>
                    <h2>
                        Создать сотрудника
                    </h2>
                    <button onClick={createWorker}>
                    <svg className='Admin__modal__content__header__svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <form>
                    <label htmlFor="name">
                        <h3>
                            Название:
                        </h3>
                        <input id='name' type="text" />
                    </label>
                    <button>
                        Создать
                    </button>
                </form>
            </div>
        </div>
        {/* создавание конец */}
        {/* Изменения начало  */}
        <div className={`Admin__modal__bg ${change ? 'Admin__modal__active' : ''}`}>
            <div className='Admin__modal__content'>
                <div className='Admin__modal__content__header'>
                    <h2>
                        Изменить сотрудника
                    </h2>
                    <button onClick={editWorker}>
                    <svg className='Admin__modal__content__header__svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <form>
                    <label htmlFor="name">
                        <h3>
                            Название:
                        </h3>
                        <input id='name' type="text" />
                    </label>
                    <button>
                        Изменить
                    </button>
                </form>
            </div>
        </div>
        {/* Изменение конец */}
        {/* Удаление начало  */}
        <div className={`Admin__modal__bg ${delate ? 'Admin__modal__active' : ''}`}>
            <div className='Admin__modal__content admin__modal__delete'>
               <div>
               <h1>
                    Удалить ?
               </h1>
               <div className='admin__modal__delete__wrapper'>
                    <button>
                        Да
                    </button>
                    <button onClick={deleteWorker}>
                        Нет
                    </button>
               </div>
               </div>
            </div>
        </div>
        {/* Удаление конец */}
    </div>
  )
}

export default RegCatItem