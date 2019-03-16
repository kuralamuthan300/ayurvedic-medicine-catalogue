import React from 'react';
import firebase from '../Firebase/firebase';
import Popularsearch from './popularsearch';

class SearchMain extends React.Component{
    
    //0 for search selection and recent searches
    //1 for search by disease
    //2 for search by ayurvedic plant
    state = {medicine:[],page : 0 , searchtext:''};
    componentDidMount(){

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
        });
        console.log(this.state.medicine);
      });


    }
    searchorpopular=()=>{

      let found = 0 ;
      let ret ;
      
      this.state.medicine.map((medicine)=>{
        if(medicine.plantname.localeCompare(this.state.searchtext)  === 0){
          found = found+1;
          ret=<Popularsearch plantname={medicine.plantname} botanicalname={medicine.botanicalname} dosage={medicine.dosage} part={medicine.parts} arr={medicine.therapeuticuses} />

        }


      });

      


      this.state.medicine.map( (medicine)=>{
        medicine.therapeuticuses.map((data)=>{
         
          var condition = data.localeCompare(this.state.searchtext);
          if(condition === 0 )
          {
            found++;
            ret = <Popularsearch plantname={medicine.plantname} botanicalname={medicine.botanicalname} dosage={medicine.dosage} part={medicine.parts} arr={medicine.therapeuticuses} />;
          }
          

        });

      });

      if(found === 0)
      {
        ret = <div class=" puff-in-left" id="box"><h1 className="ui icon header" style={{padding:'10px'}}>{this.state.searchtext} not found !</h1><br /></div>;
      }

      if(this.state.searchtext === '')
      {
        ret = <img style={{width:'15%',height:'15%'}} alt="Loading" src="https://gph.to/2W18rfP"></img>
      }



      return(<div>{ret}</div>);


    }

    render(){

        return(<div><div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="heartbeat icon" style={{    color: 'red' }}></i>
        Search anything !
        </div>
        <div class="ui search">
  <div class="ui icon input">
    <input class="prompt" type="text" style={{borderWidth:'3px',borderColor:'#000000'}} onChange={(event)=>this.setState({page:this.state.page , searchtext : event.target.value})} placeholder="Search ..." />
  </div>
  <div class="results"></div>
</div>
<br />
        
        
</div>
       {this.searchorpopular()}



      </div>
        );
    }
}
export default SearchMain;