import React, { useEffect } from 'react'
import { LoginForm } from './AuthForm'
import './AuthorizationPage.css'

const AuthorizationPage = props => {
    useEffect(() => {
        
    })

    return <div className="authorization">
        <LoginForm />
        <div>
            <h1>Информационная система “Коечный фонд - бронирование”</h1>
            <p>Департамент информатизации Тюменской области</p>
        </div>
    </div>
}

export default AuthorizationPage