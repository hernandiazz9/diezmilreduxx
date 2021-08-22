import React, { useState, useEffect } from 'react'
import Dice from './Dice'

import {useDispatch, useSelector} from 'react-redux'
import{modificarPuntajeAction} from '../redux/salaReducer'

const Calculos = () => {
    const user = useSelector(store => store.login.user)

    const allSala = useSelector(store=>store.sala.salas)
    const jugador =  allSala.filter(jug => jug.nombreJugador === user.name )
    
    const dispatch = useDispatch()

    const [puntosT, setPuntosT] = useState(0)
    const [sumo, setSumo] = useState(false)
    const [controlDados, setControlDados] = useState(0)

    const [seTiro, setSeTiro] = useState(false)

    const [blok1, setBlok1] = useState(false)
    const [blok2, setBlok2] = useState(false)
    const [blok3, setBlok3] = useState(false)
    const [blok4, setBlok4] = useState(false)
    const [blok5, setBlok5] = useState(false)
    
    const [escalera, setEscalera] = useState(false)

    const [cambiarAnotar, setCambiarAnotar] = useState(false)
    const [numDado, setNumDado] = useState([])
    const [numDadoBlok, setNumDadoBlok] = useState([])
    const [primertiro, setPrimerTiro] = useState(true)
    const [totalRonda, setTotalRonda] = useState(0)
    const [totatotal, guardarTotalTotal] = useState(0)
        var totaltotal =0;
        var filtrados;
        var puntos=0;
        var repetidos = {};
        var totalpuntos=0;
        

    //useEffect(() => {
    //    if(seSumo===true && puntosT===0) {
    //        console.log('nada', puntosT);
    //      }
    //}, [seTiro])

    useEffect(() => {

        if((controlDados + numDado.length) === 5&&puntosT===0){
            //setTotalRonda(0);
            setTotalRonda(0)
            setCambiarAnotar(true)

        }
    }, [puntosT, totalRonda])

    useEffect(() => {
       //num randon /////////////
        //for (let index = 0; index < 5; index++) {
        //  numeros.push(Math.round(Math.random()*(6-1)+parseInt(1)))
        //}
        const revisarTresDados = (numeros) =>{
          
            const nume = numeros.sort(function(a, b){return a - b});
            console.log(nume,'nume');
            if( nume[0]===nume[1]-1&&nume[1]===nume[2]-1&&nume[2]===nume[3]-1&&nume[3]===nume[4]-1&&nume[4]===nume[0]+4){
              console.log('yeah');
              setPuntosT(500)
              setBlok1(true)
              setBlok2(true)
              setBlok3(true)
              setBlok4(true)
              setBlok5(true)
              setTotalRonda(500)
              setEscalera(true)
              return
            }else if(nume[0]===1&&nume[1]===3&&nume[2]===4&&nume[3]===5&&nume[4]===6){
              console.log('yeahX2');
              setPuntosT(500)
              setBlok1(true)
              setBlok2(true)
              setBlok3(true)
              setBlok4(true)
              setBlok5(true)
              setTotalRonda(500)
              setEscalera(true)
              return
            }
          numeros.forEach(x => { repetidos[x] = (repetidos[x] || 0)+1; });
          for (let i = 0; i < Object.values(repetidos).length; i++) {
              
            if(Number(Object.values(repetidos)[i]) === 5){
              console.log('gano');
            }else if (Number(Object.values(repetidos)[i]) >= 3) { 
              if(Object.keys(repetidos)[i]==='1'){
                puntos = Number(Object.keys(repetidos)[i])*1000
              }else{
                puntos = Number(Object.keys(repetidos)[i])*100
              }
              if(Number(Object.values(repetidos)[i])===3){
                filtrados = numeros.filter(num=> num!==Number(Object.keys(repetidos)[i])) 
              }else{
                filtrados = numeros.filter(num=> num!==Number(Object.keys(repetidos)[i]))
                filtrados.push(Number(Object.keys(repetidos)[i]))
              }
              filtrados.forEach(x => {
                if(x===1){
                  puntos+=100;
                }else if(x===5){
                  puntos+=50;
                }
              });             
              setPuntosT(puntos);
              
              if(!primertiro) {
                totaltotal= totatotal + puntos
                setTotalRonda(totaltotal)
              }
              setSumo(true)
              return;
            } 
          }
          numeros.forEach(x => {
            if(x===1){
              puntos+=100;
            }else if(x===5){
              puntos+=50;
            }else return;
          });
          setPuntosT(puntos);
          if(!primertiro) {
            totaltotal= totatotal + puntos
            setTotalRonda(totaltotal)
          }
          setSumo(true)
        }

        if(primertiro){
          if((numDado.length+controlDados)===5) revisarTresDados(numDado)
        }else{
          revisarTresDados(numDadoBlok)
          if(blok1 && blok2 && blok3 && blok4 && blok5){ 
            setBlok1(false)
            setBlok2(false)
            setBlok3(false)
            setBlok4(false)
            setBlok5(false)
          }  
        }
        
        //if(!primertiro) guardarTotalTotal(totatotal+totalRonda)    
    }, [numDado, numDadoBlok])

    const anotar = (punt) =>{
        setControlDados(0);  
      totalpuntos +=  punt;
      if(jugador.length!==0){
        dispatch(modificarPuntajeAction(totalpuntos,jugador[0].turno))
      }  
      setSeTiro(false)
      setCambiarAnotar(false)
    }
    
    

    return (
        <>
          <div className='container-puntos'>
            <p className='puntos'> Puntos: {puntosT}</p>
            <p className='puntos-guardados'> Puntos Guardados: {totalRonda}</p>
          </div>
            <Dice
                setSumo={setSumo}
                primertiro={primertiro}
                setSeTiro={setSeTiro}
                seTiro={seTiro}
                setBlok1={setBlok1}
                setBlok2={setBlok2}
                setBlok3={setBlok3}
                setBlok4={setBlok4}
                setBlok5={setBlok5}
                blok1={blok1}
                blok2={blok2}
                blok3={blok3}
                blok4={blok4}
                blok5={blok5}
                guardarTotalTotal={guardarTotalTotal}
                totalRonda={totalRonda}
                setTotalRonda={setTotalRonda}
                setNumDado={setNumDado}
                numDado={numDado}
                numDado={numDado}
                setPrimerTiro={setPrimerTiro}
                setNumDadoBlok={setNumDadoBlok}
                numDadoBlok={numDadoBlok}
                controlDados={controlDados}
                setControlDados={setControlDados}
                escalera={escalera}
                setEscalera={setEscalera}
            />
            <button type='button'
                className='anotar'            
                onClick={()=>anotar(totalRonda)}
            >{cambiarAnotar?'Siguiente':'Anotar'}</button>
           
        </>
    )
}

export default Calculos
