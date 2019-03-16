import React from 'react';


const medicine = (props) =>{

    return(
        <div style={{padding:'10px'}} >
    
        <div class="gradient-border" id="box">
        <br/>
        <h1 className="ui icon header" >You can use  {props.name} </h1>
        <br />
        <p style={{padding:'10px'}}>
        
        At dosage of {props.dose} 
          , You can make use of <b>{props.parts}</b> to prepare the medicine.
    
        </p>
        <br />
        
        </div>
        </div>);
}

export default medicine;



