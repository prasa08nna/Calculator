import Buttons from './Buttons'
function ButtonGrp({mybuttons,btnclick}){
    return (
        
        <div className='btngrp'>
          <Buttons mybutton={mybuttons} btnclick={btnclick}/>
      </div>
    );
}
export default ButtonGrp;