import React,{useState} from 'react'

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {unirSalaAction} from '../redux/salaReducer'



const UnirSala = () => {
    const [salaNameUnir, setSalaNameUnir] = useState('')

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch()
    // crearmos el state utilizando nuestra tienda
    // store.sala lo sacamos de la tienda
    const sala = useSelector(store => store.sala.salas)
    const user = useSelector(store => store.login.user)
    
    const{ name } = user;
    //tengo todo el array

    const onClick = () =>{
        dispatch(unirSalaAction(salaNameUnir, name ))
    }
    return (
        <div>
            <h2>Unir Sala</h2>
            <span>Nombre de la Sala </span>
            <input type="text"
                onChange={ e => setSalaNameUnir(e.target.value)}
                value={salaNameUnir}
            />
            <button
                type='button'
                onClick={onClick}
            >Unir Sala</button>
        </div>
    )
}

export default UnirSala
