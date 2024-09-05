import React, { useRef, useState } from 'react'
import Logo from '../../Logo.png'
import '../../Style/RegisterCustomerprofile.css'
import { NavLink } from 'react-router-dom'
function CustomerProfile() {
  const [active, setActive] = useState(1)

  const openModal = (numberModal) => {
    setActive(numberModal)
  }
    
  let modal = useRef()
  function callModalUpdater(e) {
    modal.current.classList.add("show_modal")
  }
  function removeModalUpdater() {
    modal.current.classList.remove("show_modal")
  }
  return (
    <div className='RegCustomerProfile'>
      <div className='Register__header'>
        <div className='Register__header__wrapper'>
          <div className='Register__nav'>
            <div className='Register__header__logo'>
              <img src={Logo} alt="Logo" />
            </div>
            <button onClick={() => openModal(1)} className={active === 1 ? "activeBtn" : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" fillRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M9 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M7 7a.75.75 0 0 0 0 1.5h.25v2h-1a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1V7z" clipRule="evenodd"></path></svg>
              <span>
                Информация
              </span>
            </button>
            <NavLink to={`/registerCategory`}>
              <button onClick={() => openModal(2)} className={active === 2 ? "activeBtn" : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="ipSAddOne0"><g fill="none" strokeLinejoin="round" strokeWidth={4}><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path><path stroke="#000" strokeLinecap="round" d="M24 16v16m-8-8h16"></path></g></mask></defs><path fill="white" d="M0 0h48v48H0z" mask="url(#ipSAddOne0)"></path></svg>
                <span>
                  Добавить
                </span>
              </button>
            </NavLink>
            <button onClick={(e)=>callModalUpdater(e)} type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM21.41 6.34l-3.75-3.75l-2.53 2.54l3.75 3.75z" fill='white'></path></svg>
              <span>редактирование</span>
            </button>
          </div>
          <NavLink className='Register__header__out__btn' to='/register'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="white" fillRule="evenodd" stroke="white" strokeLinejoin="round" strokeWidth={4} d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clipRule="evenodd"></path></svg>
            <span>
              Назад
            </span>
          </NavLink>
        </div>
      </div>
      <div className='RegisterCustomerProfile__main'>
        {active === 1 && (
          <div className='RegisterCustomerProfile__main__info'>
            <h1>
              Информация про поциента
            </h1>
            <div className='RegisterCustomerProfile__main__info__grid'>
              <h3>
                Ф.И.О:
              </h3>
              <span>
                Турдиева Наргиза Игоровна
              </span>
            </div>
            <div className='RegisterCustomerProfile__main__info__grid'>
              <h3>
                Паспорт:
              </h3>
              <span>
                AD 20303020
              </span>
            </div>
            <div className='RegisterCustomerProfile__main__info__grid'>
              <h3>
                Год рождения:
              </h3>
              <span>
                22-12-2024
              </span>
            </div>
            <div className='RegisterCustomerProfile__main__info__grid'>
              <h3>
                Адрес:
              </h3>
              <span>
                Город гулистан
              </span>
            </div>
            <div className='RegisterCustomerProfile__main__info__grid'>
              <h3>
                Иногородный:
              </h3>
              <span>
                Да
              </span>
            </div>
            <div className='RegisterCustomerProfile__main__info__grid'>
              <h3>
                Доктор ID:
              </h3>
              <span>
                2052
              </span>
            </div>
          </div>
        )}

      </div>

      <div ref={modal} className="modal">
        <div className='RegisterForm'>
          <form>
            <h2>Редактирование поциента</h2>
            <label htmlFor="fullname">
              <span>Полное имя:</span>
              <input defaultValue="Umarov Sardor Umarovich" type="text" id='fullname' />
            </label>
            <label htmlFor="Date">
              <span>Год рождения:</span>
              <input defaultValue="2024-01-01" type="date" id='date' />
            </label>
            <label htmlFor="adres">
              <span>Адрес:</span>
              <input defaultValue="Guliston Sh 1-mavze" type="text" id='adres' />
            </label>
            <label htmlFor="tele">
              <span>Телефон номер:</span>
              <input defaultValue="998775505050" type="number" id='tele' />
            </label>
            <label htmlFor="Passport">
              <span>Пасспорт:</span>
              <input defaultValue="AC1234567" type="text" id='Passport' />
            </label>
            <label htmlFor="tf">
              <span>Иногородный:</span>
              <input className='RegisterForm__tf' type="checkbox" id="tf" />
            </label>
            
            <div className="can_upd_btn">
              <button onClick={removeModalUpdater} type="button">Отмена</button>
              <button type='submit'>Обновлять</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerProfile