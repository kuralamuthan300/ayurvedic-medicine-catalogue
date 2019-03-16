import React from 'react';
import './search.css';


const Popularsearch=(props)=>{
    var use="  ";
    for(var i = 0 ; i<props.arr.length ;i++)
    {
       
        if(i !==  props.arr.length-1)
        {
            use = use + props.arr[i].charAt(0).toUpperCase() + props.arr[i].slice(1) +" , ";
        }else  use = use + props.arr[i].charAt(0).toUpperCase() + props.arr[i].slice(1);
    }
//string.charAt(0).toUpperCase() + string.slice(1)
    return(
        <div class=" zoom puff-in-left " style={{borderWidth:'3px',borderColor:'#000000'}} id="box">
        <h1 className="ui icon header" >{props.plantname.charAt(0).toUpperCase() + props.plantname.slice(1)}</h1>
        <br />
        <h3 className="ui  header">Botanical name :</h3> <p>{props.botanicalname}</p>
        <h3 className="ui  header">Dosage:</h3> <p>{props.dosage}</p>
        <h3 className="ui  header">Edible part:</h3> <p>{props.part}</p>
        <h3 className="ui  header">Therapeutic uses name :</h3> <p>{use}</p><br />
        </div>
    );
}
export default Popularsearch;