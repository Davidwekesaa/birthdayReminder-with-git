import React from 'react'
import {birthdays} from './birthdays'
const Loadbirthday =() => {
    const[birthday,setBirthday]= React.useState(birthdays)
    return <>
    <h1>{birthday.length} birthdays today</h1>
    {birthday.map((birthday)=>{
        const {id,imgg,name,age} = birthday
        return<>
            
            <div key ={id} className = 'item'>
               
            <img src = {imgg} alt = "ok" width = "80" height="80"/>  
            <h1>{name}</h1>
            <h3>{age} years</h3>
        
        </div>
      
        
       </>

    })}
    
<button type = "button" className = "btn" onClick = {() => setBirthday([]) }>clear data</button>
    
     
    </>
        
    
}

export default Loadbirthday
