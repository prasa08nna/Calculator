function Buttons({mybutton,btnclick}){
   return (
   <>
   { mybutton.map(item=>(
         <button key={item} className='bts' onClick={btnclick}>{item}</button>
    ))}
    </>
   )
 
}
export default Buttons;

