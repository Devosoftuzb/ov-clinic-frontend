import React from 'react'
import '../Style/Login.css'
// import axios from '../Service/axios.js'
import logo from '../Logo.png'
function Login() {
    function addLocal() {
        localStorage.setItem("ADMIN", "password")
    }
  return (
    <div className='Login'>
        <div className='Login__wrapper'>
            <div className='Login__logo'>
               <img src={logo} alt="" />
            </div>
            <form>
                <label htmlFor="LoginEmail">
                    <span>
                        Логин
                    </span>
                    <input id='LoginEmail' type="text" />
                </label>
                <label htmlFor="LoginPassword">
                    <span>
                        Пароль
                    </span>
                    <input type="password" id="LoginPassword" />
                </label>
                <button onClick={addLocal}>
                    Войти
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login