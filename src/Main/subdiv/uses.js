import React from 'react';


const uses = (props) =>{
    var use=" * ";
    for(var i = 0 ; i<props.arr.length ;i++)
    {
        use = use + props.arr[i] +" * ";
    }

    return(<div>Therapeautic uses of {props.original} is <b>{use}</b></div>);

}

export default uses;