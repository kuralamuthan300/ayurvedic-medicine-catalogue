import React from 'react';
import SpeechRecognizer from 'simple-speech-recognition';
import firebase from './Firebase/firebase';
import './speech.css';




class Speech extends React.Component{

    constructor(props){
      super(props);
      this.state = {text : 'Tap to speak !' , medicine:[] ,search : 0};


    }
    componentDidMount(){
      //nothing
      const mediRef = firebase.database().ref('Medicine');
      mediRef.on('value',(snapshot)=>{
        let medicines = snapshot.val();
        let newState = [];
        for(let medicine in medicines)
        {
          newState.push(
            {
              name : medicine,
              plantname : medicines[medicine].plantname,
              botanicalname : medicines[medicine].botanicalname,
              dosage :medicines[medicine].dosage,
              parts : medicines[medicine].parts,
              therapeuticuses :medicines[medicine].therapeuticuses
              }
          );
        }
        this.setState({
          medicine : newState
        })
      })
    }

    

    onClick =()=>{

        //const speechRecognizer = new SpeechRecognizer({
          //  resultCallback: ({ transcript, finished }) => {this.setState({text:transcript}) }
        //})
        
       // speechRecognizer.start();


       
            const speechRecognizer = new SpeechRecognizer({
            resultCallback: ({ transcript, finished }) => this.setState({text:transcript.trim()})
            })
    
            speechRecognizer.start();
            this.onConditionalRenderPlant();
            
    }
    
    onConditionalRenderPlant = () =>{

      let disease = this.state.text;
      

      

      let textinput = disease.split(" ");
      console.log(textinput);

      return(<div class="typewriter" style={{padding:'20px' ,borderWidth:'thick'}}>
            <br />

            <div class="gradient-border" id="box">
            <h1 className="ui icon header" >General Notices.</h1>
            <br />
            <p style={{padding:'10px'}}>
            Consultation of a siddha physician is mandatory, for the right choice of drug, depending upon the body constitution of the patient and severity of the illness.
</p><br /><p><h4><i>     English terminologies given for disease/symptom are fairly accurate and for exact description about the disease, siddha texts should be referred.       </i></h4></p><br />
            </div>
            </div>);
  
  }

    render(){
        

        return(<div className="ui con">
            <div class="ui inverted segment lft" style={{borderRadius :'20px'}}>
            <h3><b> Commands </b></h3>
            <div class="ui inverted relaxed divided list">

            <div class="item">
            <div class="content">
            <div class="header">Ask about medicinal <br />plants !</div> <br />
            What do you know about Vilvam ?
            </div>
            </div>


            <div class="item">
            <div class="content">
            <div class="header">Medicine suggestions</div> <br />
            Suggest some  <br />medicine for fever !
            </div>
            </div>



            </div>
            </div>
           

            <div class="ui inverted segment rgt" style={{borderRadius :'20px'}}>
            <h3><b> I have ! </b></h3>
            <div class="ui inverted relaxed divided list">
            
            <div class="item">
            <div class="content">
            <div class="header">Medicinal plants</div>
            Collection of medicinal plants
            </div>
            </div>


            <div class="item">
            <div class="content">
            <div class="header">Diseases</div>
            Wide variety of diseases <br/>
            and <br/>
            Treatment methods .
            </div>
            </div>



            </div>
            </div>
           
            <div class="ui card floating message slide-in-blurred-top " style={{borderRadius :'20px' , backgroundColor:'#66ff99'}}>
            
            <div class="content">
            <div class="center aligned header tracking-in-expand ">Ask Medico !</div>

    
            </div>

              </div>
            <div class="ui card floating message puff-in-center " style={{borderRadius :'20px'}}>
            
            <div class="content">
            <br />
            <br />
            <div class="center aligned header">{this.state.text}</div>
            <br />

            <ul onClick={this.onClick} >
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>

            <br />
            <br />

    
            </div>

              </div>
              
              <br />
              <br/>
              <br/>
            <center>    <p>   


            
             </p>
            </center>
            <br />
            {this.onConditionalRenderPlant()}
            </div>
        );
    }

    
}

export default Speech ;