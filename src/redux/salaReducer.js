import firebase from '../firebase'
import 'firebase/firestore'

//------------------------constantes------------------------
const dataInicial ={
    salas : [],
    nombreSala:'',
    turno:{}
}

//------------------------types//------------------------
const CREAR_SALA = 'CREAR_SALA'
const UNIR_SALA = 'UNIR_SALA'
const LEER_SALA = 'LEER_SALA'
const ELIMINAR_SALA = 'ELIMINAR_SALA'
const MODIFICAR_NUMERO ='MODIFICAR_NUMERO'


//------------------------reducer//-----------------------------------

export default function salaReducer( state = dataInicial, action){
    switch (action.type) {
        case CREAR_SALA:
            return {
                ...state,
                nombreSala: action.payload,
            }
        case MODIFICAR_NUMERO:
            return{
                ...state,
                turno:action.payload
            }    
        case LEER_SALA:
            return {
                ...state,
                salas:action.payload
            }

        case UNIR_SALA:
            return {

            }
        case ELIMINAR_SALA:
            return{...dataInicial}
        default:
            return state
    }
}

//--------------------//acciones-----------------------------
    // primer parentesis para recibir dato cuando llamo a la funcion
export const crearSalaAction = (nombreSala, name) => async (dispatch) => {
    try {
        localStorage.setItem('nombreSala', nombreSala)
        const jugador = {
            nombreJugador:name,
            turno:1,
            mostrar:true,
            puntosTotal:0
        }
        await firebase.firestore().collection(nombreSala).add(jugador).then(()=>{
            firebase
                .firestore()
                .collection(nombreSala+'num')
                .add({numero:1})
                .then((docRef)=>{
                    dispatch({
                        type: MODIFICAR_NUMERO,
                        payload: {
                            id:docRef.id,
                            numero:1    
                        }
                    })
                })
        })
        dispatch({
            type: CREAR_SALA,
            payload: nombreSala
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const leerSalaAction = (nombreSala) => async (dispatch, getState) => {
    dispatch({
        type: CREAR_SALA,
        payload: nombreSala
    })
      try {
         firebase
        .firestore()
        .collection(nombreSala)
        .onSnapshot((snapshot)=>{
            const room = snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data()
        }))
        dispatch({
            type:LEER_SALA,
            payload:room
        })
        })
      } catch (error) {
          console.log(error);
      }
    
}
export const unirSalaAction = (nombreSala, name) => async (dispatch) =>{
      
    try {
        const existe = await firebase.firestore().collection(nombreSala).get()
        .then(query => query.size);
        
        if(existe>0){
            localStorage.setItem('nombreSala', nombreSala)
            const jugador = {
                nombreJugador:name,
                turno:existe+1,
                mostrar:false,
                puntosTotal:0
            }
            await firebase.firestore().collection(nombreSala).add(jugador)    
            dispatch({
                type: CREAR_SALA,
                payload: nombreSala
            })
        }else console.log('no existe la sala');
    } catch (error) {
        console.log(error);
    }
}
export const eliminarSalaAction = () => (dispatch) =>{
    try {
        
    } catch (error) {
        console.log(error);
    }
    dispatch({
        type:ELIMINAR_SALA
    })
}

export const modificarPuntajeAction = ( ptje ) =>async (dispatch, getState) =>{ 
    let num;
    const {turno} = getState().sala
    const {nombreSala} = getState().sala
    const {salas} = getState().sala
    
    const jug = salas.find(jugador=>{
        return jugador.turno === turno.numero;
    });
        jug.puntosTotal += ptje;
        jug.mostrar = false;
        num = jug.turno
    try {
        await firebase
            .firestore()
            .collection(nombreSala)
            .doc(jug.id)
            .update({
                puntosTotal:jug.puntosTotal,
                mostrar:false
            })
    } catch (error) {
        console.log(error);
    }
    try {
        if(num===salas.length) {
            num=0;
        }
    } catch (error) {
        console.log(error);
    }
    
    const juga = salas.find(jugador=>{
        return jugador.turno=== num+1
    });
    console.log(juga);
    
    juga.mostrar=true;
    try {
         await firebase
            .firestore()
            .collection(nombreSala)
            .doc(juga.id)
            .update({
                mostrar:true
            }).then(()=>{  
                firebase
                .firestore()
                .collection(nombreSala+'num')
                .doc(turno.id)
                .update({
                    numero:juga.turno
                })
            })
    } catch (error) {
        console.log(error);
    }
}; 
export const leerNumeroAction = (  ) => async (dispatch, getState) =>{
    const {nombreSala} = getState().sala
    
    try {
          firebase
            .firestore()
            .collection(nombreSala + 'num')
            .onSnapshot((snapshot)=>{
                const nume = snapshot.docs.map((doc)=>({
                    id:doc.id,
                ...doc.data()
            }))
                dispatch({
                    type:MODIFICAR_NUMERO,
                    payload:nume[0]
                })
            })
    } catch (error) {
        console.log(error);
        
    }
}
    


