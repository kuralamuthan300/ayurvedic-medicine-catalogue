import React from 'react';
import SpeechRecognizer from 'simple-speech-recognition';
import firebase from './Firebase/firebase';
import './speech.css';
import Botanical from './subdiv/botanicalname';
import Dosage from './subdiv/dosage';
import Uses from './subdiv/uses';
import Medicine from './subdiv/medicine';




class Speech extends React.Component{

    constructor(props){
      super(props);
      this.state = {text : 'medicine  for general debility' , medicine:[] ,search : 0};


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
      
    
      var botname;
      if(textinput[0].localeCompare("botanical") === 0)
      {
        console.log("Found botanical");
        
        
        this.state.medicine.map( (medicine)=>{
          
          var condition = medicine.plantname.localeCompare(textinput[textinput.length-1]) ;
          if(condition === 0)
          {
            botname = <Botanical name = {medicine.botanicalname} original={medicine.plantname} />;
            
          }
          
          
        });
      }


      if(textinput[0].localeCompare("dosage") === 0)
      {
        console.log("Found dosage");
        
        
        this.state.medicine.map( (medicine)=>{
          
          var condition = medicine.plantname.localeCompare(textinput[textinput.length-1]) ;
          if(condition === 0)
          {
            botname = <Dosage name = {medicine.dosage} original={medicine.plantname} part={medicine.parts}  />;
            
          }
          
          
        });
      }


      if(textinput[0].localeCompare("uses") === 0)
      {
        console.log("Found uses");
        
        
        this.state.medicine.map( (medicine)=>{
          
          var condition = medicine.plantname.localeCompare(textinput[textinput.length-1]) ;
          if(condition === 0)
          {
            botname = <Uses name = {medicine.dosage} arr={medicine.therapeuticuses} original={medicine.plantname} />;
            
          }
          
          
        });
      }


      if(textinput[0].localeCompare("medicine") === 0)
      {
        console.log("Found medicine");
        var found = 0 ;
        
        this.state.medicine.map( (medicine)=>{
          medicine.therapeuticuses.map((data)=>{
            var diseasename = textinput[(textinput.length-2)] + " " + textinput[textinput.length-1];
            console.log(diseasename);
            var condition = data.localeCompare(diseasename);
            if(condition === 0 && found === 0)
            {
              found = 1;
              
              
            }
            if(found === 1)
            {found = 2;
            botname = <Medicine name = {medicine.plantname} dose={medicine.dosage} parts={medicine.parts} />;
            }

          });

          
         
          
          
        });
        
        this.state.medicine.map( (medicine)=>{
          medicine.therapeuticuses.map((data)=>{

            var condition = data.localeCompare(textinput[textinput.length-1]) ;
            if(condition === 0 && found === 0 )
            {
              found = 1;
              
              
            }
            if(found === 1)
            {
              found = 2;
              
            botname = <Medicine parts={medicine.parts} name = {medicine.plantname} dose={medicine.dosage}  />;
            }

          });


         
          
          
        });


        
      }
      
      return <div>{botname}</div>;
      

      
  
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