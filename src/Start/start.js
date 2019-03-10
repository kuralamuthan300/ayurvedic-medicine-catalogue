import React from 'react';
import './start.css';

class Start extends React.Component{

    onClickstart = event =>{
        event.preventDefault();
        this.props.onClickButton(3);
    }

    style = {padding : '16px'}

    render(){

        return (
<div className="Welcome" style={this.style}>
            <header class=" Welcomepage w3-container  w3-center" >
  <h1 class="w3-margin ui header">Welcome</h1>
  <p class="w3-xlarge">Say Hi to  Mr.Medico</p>
  <p class="w3-large">First AI to assist your medical needs.</p>
  <center ><img alt="hi" src="https://gph.to/2RSvpbC" /></center>
  <button class="positive ui button" style={{margin:'10px'}} onClick={this.onClickstart}>Say Hi !</button>
</header>
</div>
        );
    }
}

export default Start;