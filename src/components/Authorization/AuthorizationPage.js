import React from 'react'
import './AuthorizationPage.css'

const AuthorizationPage = props => {
    return <div className="authorization">
        <form className="authorization__form">
            <h4>Вход</h4>
            <input type={"text"} placeholder='Введите логин'/>
            <input type={"password"} placeholder='Введите пароль'/>
            <div><button className='btn btn-dark'>Войти</button></div>
        </form>
        <article>
            <h2>Информационная система “Коечный фонд - бронирование”</h2>
            <p>Департамент информатизации Тюменской области</p>
        </article>
    </div>
}

export default AuthorizationPage