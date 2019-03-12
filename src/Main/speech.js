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
      let flag = 0;

      let textlen  = disease.trim().split(/\s+/).length;
      if(textlen <=2){
        return(
          <div>
        <h3 class="tracking-in-expand ui icon header">Sorry I cant find any results .</h3><br />
        <h2 class="tracking-in-expand ui icon header">Please say again !</h2>
        </div>
        );
      }else{

      let textinput = disease.split(" ");
      let chumma = textinput[textinput.length-1]; 
      let chumma2 = textinput[textinput.length-2]; 
      let avail,avail2;

      
      console.log(disease);


          return(<div > {this.state.medicine.map( (medicine)=>{

            avail = medicine.therapeuticuses.search(chumma);
            

            avail2 = medicine.therapeuticuses.search(chumma2);
            

            


           if((avail !== -1  || avail2 !== -1) && (chumma.length >4 || chumma2.length >4) ){
             flag = 1 ;
             
          
          return(
            <div>
              <br />
            <h2 class="tracking-in-expand ui icon header">You can use  : {medicine.plantname}</h2><br />
            <h4 class="tracking-in-expand ui icon header" >Parts for medicine preparation :{medicine.parts}</h4> <br />
            <h4 class="tracking-in-expand ui icon header">Dosage : {medicine.dosage}</h4> <br />
            <h4 class="tracking-in-expand ui icon header">Botanical name : {medicine.botanicalname}</h4> <br />
            <br />
         </div>
           
          );
          
        }
        }
        
          
          
          )
        
        }</div>);
      
      


    }
  
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