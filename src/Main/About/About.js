import React from 'react';
import './About.css';


class About extends React.Component{

    render(){

        return(
        
        
        <div>
            <img src="https://bit.ly/2Rmb1KG" style={{borderRadius : '22px'}} alt="ai" />
            <br />
            <div className="about bdy"  >
            <div class="typewriter" >
            <br />

            <div class="gradient-border" id="box">
            <h1 className="ui icon header" style={{padding:'10px'}} href="https://www.google.com/">About Ayush.</h1>
            <br />
            <p style={{padding:'10px'}}>The Siddha system of medicine is mainly practised in the Southern part of India. It is one of the earliest traditional medicine systems in the world which treats not only the body but also the mind and the soul. The word Siddha has its origin in the Tamil wordSiddhi which means "an object to be attained" or "perfection" or "heavenly bliss". India being the birth place of many traditional philosophies also gave birth to Siddha. The roots of this system are intertwined with the culture of ancient Tamil civilization.</p>
            <b><a href="http://nischennai.org/uploaded/pdf/THE%20SIDDHA%20PHARMACOPOEIA%20OF%20INDIA.pdf">For Reference : Click here </a></b>
            </div>
            </div>
            <div class="typewriter" >
            <br />

            <div class="gradient-border" id="box">
            <h1 className="ui icon header" style={{padding:'10px'}} href="https://www.google.com/">FAQ</h1>
            <br />
            <b><h3 className="ui icon header">What are the sources used in Siddha medicines?</h3></b>
            <p style={{padding:'10px'}}>Siddha medicines use Mooligai (herbs), Thathu (minerals) and Jeeva (animal products) as their sources.</p>
            
            
            <b><h3 className="ui icon header">How is diagnosis done in Siddha?</h3></b>
            <p style={{padding:'10px'}}>Diagnosis of disease is made on the basis of Envagaithervu (Eight parameters), of which nadi (pulse reading) is given special importance. It helps to find out the imbalanced or predominating kuttram (humor).   The clinical features and constitution of the patient are also considered. Recently some modern tools of investigations such as X- rays and Blood tests are also used before treating a patient.</p>



            <b><h3 className="ui icon header">Can Siddha system treat all diseases?</h3></b>
            <p style={{padding:'10px'}}>Generally Siddha treatment is very effective for arthritis, joint diseases, skin diseases, Urinary Tract Infections (UTI), renal stones, liver problems, neurological disorders and hemiplegic conditions.  Siddha system also offers an effective treatment for minor ailments including cold, cough and fever.  Siddha medicine has been effectively complemented with allopathic medicine in the treatment of deadly viral diseases like Dengue and Chikungunya. However a Siddha specialist needs to be consulted before starting the treatment.</p>
            
            <a href="https://www.nhp.gov.in/frequently-asked-questions_mtl" className="ui icon header">For more click here .</a>
            </div>
            </div>

            <div class="typewriter">
            <br />

            <div class="gradient-border" id="box">
            <h1 className="ui icon header" style={{padding:'10px'}}>General Notices.</h1>
            <br />
            <p style={{padding:'10px'}}>
            Consultation of a siddha physician is mandatory, for the right choice of drug, depending upon the body constitution of the patient and severity of the illness.
</p><br /><p><h4><i>     English terminologies given for disease/symptom are fairly accurate and for exact description about the disease, siddha texts should be referred.       </i></h4></p><br />
            </div>
            </div>
            </div>


            


        </div>
        
        
        
        );
    }
}

export default About