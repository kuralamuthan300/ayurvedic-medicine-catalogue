import React from 'react'

const plantname =(props)=>{
    var use=" * ";
    for(var i = 0 ; i<props.arr.length ;i++)
    {
        use = use + props.arr[i] +" * ";
    }

    return(<div>Here you go !<br />Details of {props.original}. <br/> Botanical name : {props.botanical} <br /> Dosage : {props.dose} <br/> Parts used to prepare Medicine : {props.part} <br /> Medicinal uses : {use} </div>);
}

export default plantname;