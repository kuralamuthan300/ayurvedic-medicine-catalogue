import React from 'react'

const plantname =(props)=>{
    var use=" * ";
    for(var i = 0 ; i<props.arr.length ;i++)
    {
        use = use + props.arr[i] +" * ";
    }

    return(<div style={{padding:'10px'}}>
    


        <div class="gradient-border" id="box">
            <br/>
            <h1 className="ui icon header" > Here you go ! <br /> Details of {props.original}:</h1>
            <br />
            <p >
            
            <br/> Botanical name : {props.botanical} 
            <br /> Dosage : {props.dose} 
            <br/> Parts used to prepare Medicine : {props.part} 
            <br /> Medicinal uses : {use} 

            </p>
            <br />
            
            </div>



        </div>
        
        
        
        
        
        );
}

export default plantname;