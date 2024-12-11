// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

import AnsText from './Components/AnsText'
import ButtonGrp from './Components/ButtonGrp'

function App() {
  let [calVal,setCalVal]=useState("");
  let [calHis,setCalHis]=useState([]);
  
  let btnsA=['AC','%','#','/','7','8','9','*','4','5','6','-','1','2','3','+','00','0','.','=']
  function btnClicked(event){
    if(event.target.innerText==='AC'){
      setCalVal("");
      setCalHis([]);
    }
    else if(event.target.innerText==='#'){
      if(calHis.length>0){
        const newHis=[...calHis];
        const lastVal=newHis.pop();
        setCalHis(newHis);
        setCalVal(lastVal);
      }
      else{
        setCalHis([]);
      }
    }
    else if(event.target.innerText==='='){
      try{
        const result=eval(calVal);
        setCalVal(result);
        setCalHis([...calHis,calVal]);
      }
      catch(error){
        setCalVal("Error");
      }
     
    }
    else{
      setCalHis([...calHis,calVal])
      let newVal=calVal+event.target.innerText;
      setCalVal(newVal);
    }

  }
  return (
    <center>
    <div className='Calculator'>
      <AnsText displayVal={calVal}></AnsText>   
      <ButtonGrp mybuttons={btnsA} btnclick={(event)=>btnClicked(event)} />
    </div>
    </center>
  )
}

export default App

