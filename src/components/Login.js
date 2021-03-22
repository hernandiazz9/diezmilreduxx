import React, { useState } from 'react'
// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {iniciarSesionAction} from '../redux/loginReducer'

const Login = (props) => {
    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch()

    //crear state para loguearse
    const [loguear, setLoguear] = useState({
        email:'',
        password:'',
    })
    const {email, password} = loguear

    const crear = ()=>{
        dispatch(iniciarSesionAction(email, password))
        props.history.push('/')
        setLoguear({
            email:'',
            password:''
        })
    }
    
    
    const onChange = (e) =>{
        setLoguear({
            ...loguear,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div className='row'>
            <div className='container-registrarse'>
                <h1>Crea una cuenta</h1>
                <div className='nombreemailpass'>
                    <label>Email </label> 
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={onChange}
                    />

                </div>
                <div className='nombreemailpass'>
                    <label>Password </label>
                    <input type="password"
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <button type='button'
                    onClick={crear}
                >Loguearse</button>
            </div>
        </div>    
    )
}

export default Login
