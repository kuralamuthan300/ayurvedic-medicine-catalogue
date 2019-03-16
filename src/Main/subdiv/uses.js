import React from 'react';


const uses = (props) =>{
    var use="  ";
    for(var i = 0 ; i<props.arr.length ;i++)
    {
       
        if(i!= props.arr.length-1)
        {
            use = use + props.arr[i].charAt(0).toUpperCase() + props.arr[i].slice(1) +" , ";
        }else  use = use + props.arr[i].charAt(0).toUpperCase() + props.arr[i].slice(1);
    }

    

    return(<div style={{padding :'20px'}}><div class="gradient-border"  id="box">
    <br/>
    <h1 className="ui icon header" >Here you go !</h1>
    <br/>
    <h1 className="ui icon header" > {props.original.charAt(0).toUpperCase()+ props.original.slice(1)} is used to treat  {use}.</h1>
    <br />
    <br />
    
    </div></div>);

}

export default uses;



//<div>Therapeautic uses of {props.original} is <b>{use}</b></div>

