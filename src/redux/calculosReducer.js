import firebase from '../firebase'
import 'firebase/firestore'

//------------------------constantes------------------------
const dataInicial ={
    
}

//------------------------types//------------------------
const CREAR_SALA = 'CREAR_SALA'


//------------------------reducer//-----------------------------------

export default function salaReducer( state = dataInicial, action){
    switch (action.type) {
        case CREAR_SALA:
            return{
                
            }
        default:
            return state
    }
}

//--------------------//acciones-----------------------------
export const crearSalaAction = (nombreSala, name) => async (dispatch) => {
    
}