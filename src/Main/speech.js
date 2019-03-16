import React from 'react';
import SpeechRecognizer from 'simple-speech-recognition';
import firebase from './Firebase/firebase';
import './speech.css';
import Botanical from './subdiv/botanicalname';
import Dosage from './subdiv/dosage';
import Uses from './subdiv/uses';
import Medicine from './subdiv/medicine';
import OnewordPlant from './subdiv/oneword/plantname';
import OnewordMedicine from './subdiv/oneword/medicineoneword';




class Speech extends React.Component{

    constructor(props){
      super(props);
      this.state = {text : 'Tap to speak !' , medicine:[] ,search :0};


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
      var found = 0 ;


      this.state.medicine.map( (medicine)=>{
          
        
        if(medicine.plantname === textinput[0])
        {
          botname = <OnewordPlant original = {medicine.plantname} botanical={medicine.botanicalname} dose ={medicine.dosage} part={medicine.parts} arr={medicine.therapeuticuses} />;
          found=1;
          
        }
        
        
      });



      this.state.medicine.map( (medicine)=>{
        medicine.therapeuticuses.map((data)=>{
          var diseasename = textinput[0] + " " + textinput[1];
          console.log(diseasename);
          var condition = data.localeCompare(diseasename);
          if(condition === 0 && found === 0)
          {
            found = 10;
            
            
          }
          if(found === 10)
          {
          found = 20;
          botname = <OnewordMedicine dose={medicine.dosage} disease = {diseasename} original={medicine.plantname} parts={medicine.parts} botanical={medicine.botanicalname} arr = {medicine.therapeuticuses}/>;
          }

        });

        
       
        
        
      });



      this.state.medicine.map( (medicine)=>{
        medicine.therapeuticuses.map((data)=>{

          var condition = data.localeCompare(textinput[textinput.length-1]) ;
          if(condition === 0 && found === 0 )
          {
            found = 100;
            
            
          }
          if(found === 100)
          {
            found = 200;
            
          botname = <OnewordMedicine dose={medicine.dosage} disease = {data} original={medicine.plantname} parts={medicine.parts} botanical={medicine.botanicalname} arr = {medicine.therapeuticuses}/>;
          }

        });


       
        
        
      });




      if(textinput[0].localeCompare("botanical") === 0 && found === 0)
      {
        console.log("Found botanical");
        
        
        this.state.medicine.map( (medicine)=>{
          
          var condition = medicine.plantname.localeCompare(textinput[textinput.length-1]) ;
          if(condition === 0)
          {
            botname = <Botanical name = {medicine.botanicalname} original={medicine.plantname} />;
            found=1000;
          
          }
          
          
        });

        if(found !== 1000)
        {
          botname = <div style={{padding :'20px'}}><div class="gradient-border"  id="box">
          <br/>
          <h1 className="ui icon header" > Botanical name of {textinput[textinput.length-1]} is not found !</h1>
          <br />
          <br />
          
          </div></div>;
        }
      }


      if(textinput[0].localeCompare("dosage") === 0 && found === 0) 
      {
        console.log("Found dosage");
        
        
        this.state.medicine.map( (medicine)=>{
          
          var condition = medicine.plantname.localeCompare(textinput[textinput.length-1]) ;
          if(condition === 0)
          {
            botname = <Dosage name = {medicine.dosage} original={medicine.plantname} part={medicine.parts}  />;
            found=10000;
          }
          
          
        });

        if(found !== 10000)
        {
          botname = <div style={{padding :'20px'}}><div class="gradient-border"  id="box">
          <br/>
          <h1 className="ui icon header" > {textinput[textinput.length-1]} is not found !</h1>
          <br />
          <br />
          
          </div></div>;
        }
      }


      if(textinput[0].localeCompare("uses") === 0 && found === 0)
      {
        console.log("Found uses");
        
        
        this.state.medicine.map( (medicine)=>{
          
          var condition = medicine.plantname.localeCompare(textinput[textinput.length-1]) ;
          if(condition === 0)
          {
            found = 100000;
            botname = <Uses name = {medicine.dosage} arr={medicine.therapeuticuses} original={medicine.plantname} />;
            
          }
          
          
        });

        if(found !== 100000)
        {
          botname = <div style={{padding :'20px'}}><div class="gradient-border"  id="box">
          <br/>
          <h1 className="ui icon header" > {textinput[textinput.length-1]} is not found !</h1>
          <br />
          <br />
          
          </div></div>;
        }
      }


      if(textinput[0].localeCompare("medicine") === 0 && found === 0)
      {
        console.log("Found medicine");
        
        
        this.state.medicine.map( (medicine)=>{
          medicine.therapeuticuses.map((data)=>{
            var diseasename = textinput[(textinput.length-2)] + " " + textinput[textinput.length-1];
            console.log(diseasename);
            var condition = data.localeCompare(diseasename);
            if(condition === 0 && found === 0)
            {
              found = 1000000;
              
              
            }
            if(found === 1000000)
            {found = 2000000;
            botname = <Medicine name = {medicine.plantname} dose={medicine.dosage} parts={medicine.parts} />;
            }

          });
          
        });

        
        
        this.state.medicine.map( (medicine)=>{
          medicine.therapeuticuses.map((data)=>{

            var condition = data.localeCompare(textinput[textinput.length-1]) ;
            if(condition === 0 && found === 0 )
            {
              found = 10000000;
              
              
            }
            if(found === 10000000)
            {
              found = 20000000;
              
            botname = <Medicine parts={medicine.parts} name = {medicine.plantname} dose={medicine.dosage}  />;
            }

          });


         
          
          
        });

        if(found <1000000)
        {

          botname = <div style={{padding :'20px'}}><div class="gradient-border"  id="box">
          <br/>
          <h1 className="ui icon header" > Medicine not found !,<br /> Try again!</h1>
          <br />
          <br />
          
          </div></div>;
        }


        
      }



      if(this.state.text === "Tap to speak !")
      {
        return <div style={{padding :'20px'}}><div class="gradient-border"  id="box">
        <br/>
        <h1 className="ui icon header" > Happy to help !</h1>
        <br />
        <br />
        
        </div></div>;
      }
      
        if(found >=0)
        {
          return <div>{botname}</div>;
        }else return <div > I did't get that say it again </div>;
      
      
      

      
  
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