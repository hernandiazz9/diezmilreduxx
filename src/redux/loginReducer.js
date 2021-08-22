import firebase from '../firebase'
import 'firebase/auth'
//-----------------state inicial-------------------//
const dataInicial = {
    loading: false,
    activo: false,
    user:{}
}
//-----------------type-------------------//
const LOADING = 'LOADING'
const USER_EXITO = 'USER_EXITO'
const USER_ERROR = 'USER_ERROR'
const CERRAR_SESION = 'CERRAR_SESION'

//-----------------reducer-------------------//
export default function usuarioReducer (state = dataInicial, action){

    switch(action.type){
        case LOADING:
            return {...state, loading: true}
        case USER_ERROR:
            return {...dataInicial}
        case USER_EXITO:
            return {...state, loading: false, activo: true, user: action.payload.user}
        case CERRAR_SESION:
            return {...dataInicial}
        default: 
            return {...state}
    }

}
//-----------------action-------------------//
export const crearCuentaAction = (email, pass, nombre) => async(dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const res =  await firebase.auth().createUserWithEmailAndPassword(email, pass)
        await res.user.updateProfile({
            displayName : nombre
        })
       console.log(res);
       dispatch({
           type:USER_EXITO,
           payload: {
                user: {
                    uid: res.user.uid,
                    email: res.user.email,
                    name: res.user.displayName
                }
           }
       })
    } catch (error) {
        console.log(error)
        dispatch({
            type: USER_ERROR
        })
    }
}
export const iniciarSesionAction = (email, pass) => async (dispatch)=>{
    dispatch({
        type: LOADING
    })
    try {
        const res =  await firebase.auth().signInWithEmailAndPassword(email, pass)
       console.log(res);
       dispatch({
           type:USER_EXITO,
           payload: {
                user: {
                    uid: res.user.uid,
                    email: res.user.email,
                    name: res.user.displayName
                }
           }
       })
    } catch (error) {
        console.log(error)
        dispatch({
            type: USER_ERROR
        })
    }
}
export const obtenerUsuarioAction = () =>  (dispatch)=>{
    try {
          firebase.auth().onAuthStateChanged(user =>{
            if(user){
                dispatch({
                    type:USER_EXITO,
                    payload: {
                        user: {
                            uid: user.uid,
                            email: user.email,
                            name: user.displayName
                        }
                    }
                }) 
            }
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: USER_ERROR
        })
    }
}
 export const cerrarSesionAction = () =>  (dispatch)=>{
    try {
        firebase.auth().signOut()
        localStorage.removeItem('nombreSala')
        dispatch({
            type:CERRAR_SESION
        })
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: USER_ERROR
        })
    }
} 