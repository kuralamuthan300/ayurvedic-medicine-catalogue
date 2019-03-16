import React from 'react'

const medicineoneword =(props)=>{
    var use=" * ";
    for(var i = 0 ; i<props.arr.length ;i++)
    {
        use = use + props.arr[i] +" * ";
    }
    return(<div>{props.disease} can be treated with {props.original} <br/> Botanical name : {props.botanical} <br /> Dosage : {props.dose} <br/> Parts used to prepare Medicine : {props.parts} <br /> Other Medicinal uses : {use} </div>);
}

export default medicineoneword;