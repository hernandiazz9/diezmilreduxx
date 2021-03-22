import React,{useState} from 'react'

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {crearSalaAction} from '../redux/salaReducer'



const CrearSala = () => {
    const [salaName, setSalaName] = useState('')

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch()
    // crearmos el state utilizando nuestra tienda
    // store.sala lo sacamos de la tienda
    const sala = useSelector(store => store.sala.room)
    const user = useSelector(store => store.login.user)
   
    const{ name } = user;
    //tengo todo el array

    const onClick = () =>{
        dispatch(crearSalaAction(salaName, name ))
    }
    return (
        <div>
            <h2>crear sala</h2>
            <span>Nombre de la Sala</span>
            <input type="text"
                onChange={e => setSalaName(e.target.value)}
                value={salaName}
            />
            <button
                type='button'
                onClick={onClick}
            >crear sala</button>
        </div>
    )
}

export default CrearSala
