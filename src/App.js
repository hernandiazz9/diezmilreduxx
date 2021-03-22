import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import firebase from './firebase'
import 'firebase/firestore'

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {obtenerUsuarioAction} from './redux/loginReducer'
import {leerSalaAction, leerNumeroAction} from './redux/salaReducer'

import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import CrearCuenta from './components/CrearCuenta';

  
function App() {
    const nombreSala = useSelector(store => store.sala.nombreSala)
    const salas = useSelector(store => store.sala.salas)

    const logueado = useSelector(store => store.login.activo)

    const dispatch = useDispatch()
    const nameSala = localStorage.getItem('nombreSala')
    
    useEffect(() => {
        if(nameSala) dispatch(leerSalaAction(nameSala))
    }, [nameSala,nombreSala])

    useEffect(() => {
        dispatch(obtenerUsuarioAction())
    
    }, [])
    
    useEffect(() => {  //////////////////////
        if(logueado){

            dispatch(leerNumeroAction())
        }
    }, [logueado, salas])
    return (
        <Router>
            <div className="container pl-0 pr-0 ">
                <Navbar />
                <Switch>
                    <Route component={Login} path="/login" exact/>
                    <Route component={CrearCuenta} path="/CrearCuenta" exact/>
                    <Route component={Home} path="/" exact/>
                </Switch>
                
            </div>
        </Router>

       
        
    );
}  
export default App;

