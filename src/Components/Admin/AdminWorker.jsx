import React, { useState } from 'react'
import AdminHeader from './AdminHeader'
import '../../Style/WorkerAdmin.css'
function AdminWorker() {
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
    <div className='AdminWorker'>
        <AdminHeader/>
        <div className='AdminWorker__main'>
            <div className='AdminWorker__main__header'>
                <h1>
                    Сотрудники
                </h1>
                <button onClick={createWorker} className='AdminWorker__main__header__button'>
                <svg className='AdminWorker__main__header__button__svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path  d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18q.617 0 1.21-.057A5.48 5.48 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5zM14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 .5-.5"></path></svg>
                    <span>
                        Создать сотрудника
                    </span>
                </button>
            </div>
            <div className='Admin__main__table'>
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
                        Роль 
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
                  <tr>
                    <td>
                      <h3>
                        1
                      </h3>
                    </td>
                    <td>
                      <h3>
                        Доктор
                      </h3>
                    </td>
                    <td>
                      <div className='Register__table__setings'>
                      <button onClick={editWorker} className='Admin__main__table__edit'>
                        <svg className='Admin__main__table__edit__svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM21.41 6.34l-3.75-3.75l-2.53 2.54l3.75 3.75z"></path></svg>
                        </button>
                        <button onClick={deleteWorker} className='Admin__main__table__delete'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path  d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"></path></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>
                        2
                      </h3>
                    </td>
                    <td>
                      <h3>
                        Кассир 
                      </h3>
                    </td>
                    <td>
                    <div className='Register__table__setings'>
                      <button onClick={editWorker} className='Admin__main__table__edit'>
                        <svg className='Admin__main__table__edit__svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM21.41 6.34l-3.75-3.75l-2.53 2.54l3.75 3.75z"></path></svg>
                        </button>
                        <button onClick={deleteWorker} className='Admin__main__table__delete'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path  d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"></path></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='Admin__main__footer'>
                <div className='Admin__main__footer__wrapper'>
                    <button>
                    <svg className='Admin__main__footer__svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path  d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12"></path></svg>
                    </button>
                    <div>
                        <span>
                            1
                        </span>
                        <span>
                            /
                        </span>
                        <span>
                            2
                        </span>
                    </div>
                    <button>
                    <svg className='Admin__main__footer__svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clipRule="evenodd"></path></svg>
                    </button>
                </div>
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

export default AdminWorker