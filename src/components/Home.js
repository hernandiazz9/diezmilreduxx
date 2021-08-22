import React from 'react'
import CrearSala from './CrearSala'
import UnirSala from './UnirSala'
import Calculos from './Calculos'


import {Link} from 'react-router-dom'
// hooks react redux
import {useDispatch, useSelector} from 'react-redux'
import {eliminarSalaAction} from '../redux/salaReducer'


const Home = () => {
    const user = useSelector(store => store.login.user)
    const cargando = useSelector(store => store.login.loading)
    const usuario = useSelector(store => store.login.activo)
    const dispatch = useDispatch();
    const sala = useSelector(store => store.sala.nombreSala)
    const salas = useSelector(store => store.sala.salas)
    
    
    const jugadore = salas.find(jugador=>{
        return jugador.nombreJugador === user.name;
    });

    const salirSala = () => {
        localStorage.removeItem('nombreSala')
        dispatch(eliminarSalaAction())
    }
    return (
        
        <div>
            
            {usuario?(
                sala? (
                    <div>
                        {jugadore&& jugadore.mostrar&&<Calculos/>}
                        <div  className='container-botom'>
                            {
                                salas.map(jugador=>(
                                        <h3 className='nombre-jugador' key={jugador.id}>{jugador.nombreJugador}: {jugador.puntosTotal}</h3>
                                    
                                ))
                            }
                            <p className='nombre-sala'> sala <span className='nombre-salaa'>{sala}</span></p>
                        
                            <button
                                    type='button'
                                    onClick={salirSala}
                                    className='cerrar-sesion'
                            >Salir del Juego</button>
                        </div>
                    </div>        
                ):(
                    <>
                        <CrearSala/>
                        <UnirSala />
                    </>
                )
                
            ):(
                cargando?<p>cargando..</p>:(
                    <>
                        <p>Comienza iniciando sesion o creando una cuenta</p>
                        <Link to="/login" > Login </Link>
                        <Link to="/CrearCuenta" > Crear Cuenta </Link>
                    </>    
                )
            )}
            
            
        </div>
    )
}

export default Home
