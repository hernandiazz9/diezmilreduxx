import React, { useState, useEffect } from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'




const Dice = ({escalera, setEscalera, totalRonda,guardarTotalTotal, setSumo,numDadoBlok,setControlDados, controlDados,setNumDadoBlok,setNumDado,numDado,setSeTiro, seTiro, setPrimerTiro, setBlok1, setBlok2, setBlok3, setBlok4, setBlok5,blok1,blok2, blok3, blok4, blok5}) => {
    
    const [dado1, setDado1] = useState(0)
    const [dado2, setDado2] = useState(0)
    const [dado3, setDado3] = useState(0)
    const [dado4, setDado4] = useState(0)
    const [dado5, setDado5] = useState(0)

    const [rolld1, setRolld1] = useState()
    const [rolld2, setRolld2] = useState()
    const [rolld3, setRolld3] = useState()
    const [rolld4, setRolld4] = useState()
    const [rolld5, setRolld5] = useState()

    const [blockGreen1, setBlockGreen1] = useState(false)
    const [blockGreen2, setBlockGreen2] = useState(false)
    const [blockGreen3, setBlockGreen3] = useState(false)
    const [blockGreen4, setBlockGreen4] = useState(false)
    const [blockGreen5, setBlockGreen5] = useState(false)
    

    const [blockGreen, setBlockGreen] = useState([])
    var tresDadosSeleccionar={};
    var tri = [];

    useEffect(() => {
        blockGreen.forEach( x => { tresDadosSeleccionar[x] = (tresDadosSeleccionar[x] || 0)+1; });
        Object.values(tresDadosSeleccionar).forEach(element => {
            
            if(element===3){
                if(blockGreen1){
                    setBlok1(true)
                    setPrimerTiro(false)
                    tri.push(dado1)
                    setDado1(0)
                    setBlockGreen1(false)
                    setSeTiro(false)
                }
                if(blockGreen2){
                    setBlok2(true)
                    setPrimerTiro(false)
                    tri.push(dado2)
                    setDado2(0)
                    setBlockGreen2(false)
                    setSeTiro(false)
                }
                if(blockGreen3){
                    setBlok3(true)
                    setPrimerTiro(false)
                    tri.push(dado3)
                    setDado3(0)
                    setBlockGreen3(false)
                    setSeTiro(false)
                }
                if(blockGreen4){
                    setBlok4(true)
                    setPrimerTiro(false)
                    tri.push(dado4)
                    setDado4(0)
                    setBlockGreen4(false)
                    setSeTiro(false)
                }
                if(blockGreen5){
                    setBlok5(true)
                    setPrimerTiro(false)
                    tri.push(dado5)
                    setDado5(0)
                    setBlockGreen5(false)
                    setSeTiro(false)
                }
                setBlockGreen([])
                numDadoBlok.forEach(element=>tri.push(element))
                setNumDadoBlok(tri)
                tri=[]
            }
        })
        
    }, [blockGreen])

    
      
    //useEffect(() => {
    //  if(setPrimerTiro){
    //    setNumDado([
    //      dado1,dado2,dado3,dado4,dado5
    //    ])
    //  }
    //}, [dado1,dado2,dado3,dado4,dado5])

      function rollDoneCallback1(num) {
            setNumDado([
                ...numDado,
                num
            ])
          
          setDado1(num)
          setPrimerTiro(true)
          setNumDadoBlok([])
          guardarTotalTotal(totalRonda)
          setSeTiro(true)
          setBlockGreen([])
      }
      function rollDoneCallback2(num) {
        setNumDado([
            ...numDado,
            num
        ])
          setDado2(num)
          setPrimerTiro(true)
          setNumDadoBlok([])
          guardarTotalTotal(totalRonda)
          setSeTiro(true)
          setBlockGreen([])
      }
      function rollDoneCallback3(num) {
        setNumDado([
            ...numDado,
            num
        ])
          setDado3(num)
          setPrimerTiro(true)
          setNumDadoBlok([])
          guardarTotalTotal(totalRonda)
          setSeTiro(true)
          setBlockGreen([])
      }
      function rollDoneCallback4(num) {
        setNumDado([
            ...numDado,
            num
        ])
        setDado4(num)
        setPrimerTiro(true)
        setNumDadoBlok([])
        guardarTotalTotal(totalRonda)
        setSeTiro(true)
        setBlockGreen([])
      }
      function rollDoneCallback5(num) {
        setNumDado([
            ...numDado,
            num
        ])
          setDado5(num)
          setPrimerTiro(true)
          setNumDadoBlok([])
          guardarTotalTotal(totalRonda)
          setSeTiro(true)
          setBlockGreen([])
      }
      
      const bloqueado1 = ()=>{
        if(dado1===0)return
        if(!blok1&&!blockGreen1){
        if(dado1===1||dado1===5){
            setSeTiro(false)
            setPrimerTiro(false)
            setBlok1(true)
            setNumDadoBlok([
              ...numDadoBlok,
              dado1
            ])
            setDado1(0) 
        }else{
            setBlockGreen1(true)
            setBlockGreen([
                ...blockGreen,
                dado1
            ])
        }
      }
      }
      const bloqueado2 = ()=>{
          if(dado2===0)return
        if(!blok2&&!blockGreen2){
        if(dado2===1||dado2===5){
            setSeTiro(false)
            setBlok2(true)
            setPrimerTiro(false)
            setNumDadoBlok([
              ...numDadoBlok,
              dado2
            ])
            setDado2(0) 
        }else{
            setBlockGreen2(true)
            setBlockGreen([
                ...blockGreen,
                dado2
            ])
        }
      }}
      const bloqueado3 = ()=>{
        if(dado3===0)return
        if(!blok3&&!blockGreen3){
        if(dado3===1||dado3===5){

            setSeTiro(false)
            setBlok3(true)
            setPrimerTiro(false)
            setNumDadoBlok([
              ...numDadoBlok,
              dado3
            ])
            setDado3(0) 
        }else{
            setBlockGreen3(true)
            setBlockGreen([
                ...blockGreen,
                dado3
            ])
        }
      }}
      const bloqueado4 = ()=>{
        if(dado4===0)return
        if(!blok4&&!blockGreen4){
        if(dado4===1||dado4===5){
            setSeTiro(false)

            setBlok4(true)
            setPrimerTiro(false)
            setNumDadoBlok([
              ...numDadoBlok,
              dado4
            ])
            setDado4(0) 
        }else{
            setBlockGreen4(true)
            setBlockGreen([
                ...blockGreen,
                dado4
            ])
        } 
      }}
      const bloqueado5 = ()=>{
        if(dado5===0)return
        if(!blok5&&!blockGreen5){
        if(dado5===1||dado5===5){
            setSeTiro(false)

            setBlok5(true)
            setPrimerTiro(false)
            setNumDadoBlok([
              ...numDadoBlok,
              dado5
            ])
            setDado5(0) 
        }else{
            setBlockGreen5(true)
            setBlockGreen([
                ...blockGreen,
                dado5
            ])
        }

      }}
      const rollTodos =()=>{
          if(escalera){
            setNumDado([])
            setSumo(false)
            setControlDados(controlDados=> controlDados + numDadoBlok.length);
            console.log(controlDados);
              
                  rolld1.rollAll()
                  rolld2.rollAll()
                  rolld3.rollAll()
                  rolld4.rollAll()
                  rolld5.rollAll()
                  setBlok1(false)
                  setBlok2(false)
                  setBlok3(false)
                  setBlok4(false)
                  setBlok5(false)
              setEscalera(false)  
          }
        setNumDado([])
        setSumo(false)
        setControlDados(controlDados=> controlDados + numDadoBlok.length);
        console.log(controlDados);
          if(!seTiro){
              if (!blok1)rolld1.rollAll()
              if (!blok2)rolld2.rollAll()
              if (!blok3)rolld3.rollAll()
              if (!blok4)rolld4.rollAll()
              if (!blok5)rolld5.rollAll()
          }
      }
    
      if(controlDados===5)setControlDados(0);

    return (
      <div>
          
        <div className='dados' id='dadoss'>
            <button className='dados-boton dado1' type='button' onClick={bloqueado1}>
                <div className={blok1 ? 'bloqueado' : seTiro?'bloqueado2':null}>
                    <ReactDice
                        dieSize={50}
                        disableIndividual={true}
                        dotColor={'#343a40'}
                        faceColor ={'#E3FB4F'}
                        numDice={1}
                        rollDone={rollDoneCallback1}
                        ref={dice => {
                            setRolld1(dice)
                            }}
                    />
                </div>  
            </button>
            <button className='dados-boton dado2' type='button' onClick={bloqueado2}>
                <div className={blok2 ? 'bloqueado' : seTiro?'bloqueado2': null}>
                    <ReactDice
                        faceColor ={'#E3FB4F'}
                        dotColor={'#343a40'}
                        dieSize={50}
                        disableIndividual={true}
                        numDice={1}
                        rollDone={rollDoneCallback2}
                        ref={dice => {
                            setRolld2(dice)
                            }}
                    />
                    </div>
                </button>
            <button className='dados-boton dado3' type='button' onClick={bloqueado3}>        
                <div className={blok3 ? 'bloqueado' : seTiro?'bloqueado2': null}>
                    <ReactDice
                        dieSize={50}
                        faceColor ={'#E3FB4F'}
                        dotColor={'#343a40'}
                        disableIndividual={true}
                        numDice={1}
                        rollDone={rollDoneCallback3}
                        ref={dice => {
                            setRolld3(dice)
                            }}
                    />
                </div>
            </button>    
            <button className='dados-boton dado4' type='button' onClick={bloqueado4}>
                <div className={blok4 ? 'bloqueado': seTiro?'bloqueado2' : null}>
                    <ReactDice
                        dieSize={50}
                        faceColor ={'#E3FB4F'}
                        dotColor={'#343a40'}
                        disableIndividual={true}
                        numDice={1}
                        rollDone={rollDoneCallback4}
                        ref={dice => {
                            setRolld4(dice)
                            }}
                    />
                </div>
            </button>
            <button className='dados-boton dado5' type='button' onClick={bloqueado5}>
                <div className={blok5 ? 'bloqueado' : seTiro?'bloqueado2': null}>
                    <ReactDice
                        dieSize={50}
                        dotColor={'#343a40'}
                        faceColor ={'#E3FB4F'}
                        disableIndividual={true}
                        numDice={1}
                        rollDone={rollDoneCallback5}
                        ref={dice => {
                            setRolld5( dice)
                            }
                    }
                    />
                </div>
            </button>
        

        <button type='button' className='rolltodos' onClick={rollTodos}>Roll</button>
        </div>
      </div>
    )
}

export default Dice;


  
