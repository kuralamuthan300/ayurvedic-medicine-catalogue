import React from 'react';


const botanicalname = (props) =>{


    
    return(
        <div style={{padding :'20px'}}><div class="gradient-border"  id="box">
          <br/>
          <h1 className="ui icon header" >Here you go !</h1>
          <br/>
          <h1 className="ui icon header" > Botanical name of {props.original} is {props.name}.</h1>
          <br />
          <br />
          
          </div></div>

    );

}

export default botanicalname;

//<div>Botanical name  of {props.original}  is  {props.name} </div>