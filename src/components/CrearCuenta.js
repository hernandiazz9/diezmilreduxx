import React, { useState } from 'react'
// hooks react redux
import {useDispatch} from 'react-redux'

// importamos la acción
import {crearCuentaAction} from '../redux/loginReducer'

const CrearCuenta = (props) => {
    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch()

    //crear state para loguearse
    const [loguearse, setLoguearse] = useState({
        email:'',
        password:'',
        nombre:''
    })
    const {email, password, nombre} = loguearse

    const crear =() =>{
        dispatch(crearCuentaAction(email, password, nombre))
        props.history.push('/')
        setLoguearse({
            email:'',
            password:'',
            nombre:''
        })
    }
    
    
    const onChange = (e) =>{
        setLoguearse({
            ...loguearse,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div className='row'>
            <div className='container-registrarse'>
                <h1>Crea una cuenta</h1>
                <div className='nombreemailpass'>
                    <label>Nombre </label>
                    <input 
                        type="text"
                        value={nombre}
                        name='nombre'
                        onChange={onChange}
                    />
                </div>
                
                <div className='nombreemailpass'>
                    <label> Email  </label> 
                    <input type="email"
                        className='ml-2'
                        name='email'
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className='nombreemailpass'>
                    <label>Password (6 digitos) </label>
                    <input type="password"
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <button type='button'
                    onClick={crear}
                >Crear Cuenta</button>
            </div>
            
        </div>    
    )
}

export default CrearCuenta
