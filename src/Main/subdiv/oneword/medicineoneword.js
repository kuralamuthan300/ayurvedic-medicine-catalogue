import React from 'react'

const medicineoneword =(props)=>{
    var use=" * ";
    for(var i = 0 ; i<props.arr.length ;i++)
    {
        use = use + props.arr[i] +" * ";
    }


    var disease = props.disease.charAt(0).toUpperCase() + props.disease.slice(1);


    return(<div style={{padding:'10px'}} >
    
            <div class="gradient-border" id="box">
            <br/>
            <h1 className="ui icon header" >{disease} can be treated with {props.original} </h1>
            <br />
            <p style={{padding:'10px'}}>
            
            <br/> Botanical name : {props.botanical} <br /> Dosage : {props.dose} 
            <br/> Parts used to prepare Medicine : {props.parts}
            <br /> Other Medicinal uses : {use} 

            </p>
            <br />
            
            </div>
            </div>
     
     
     
     
     );
}

export default medicineoneword;