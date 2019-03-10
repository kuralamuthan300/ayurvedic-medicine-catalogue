import React from 'react';
import Popular from './popularsearch'

class SearchMain extends React.Component{
    state = {page : 0 , searchtext:'' };
    //0 for search selection and recent searches
    //1 for search by disease
    //2 for search by ayurvedic plant


    searchorpopular=()=>{

      if(this.state.searchtext === '')
      {
        return (<Popular />);
      }else return(
        <div>
        <div class="ui section divider"></div>
        <br />
        <br />
        <center><h4 style={{margin :'20px'}}>No matching results found</h4></center>
        </div>
      );
    }

    render(){

        return(<div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="heartbeat icon" style={{    color: 'red' }}></i>
        Search by
        </div>
        <div class="ui search">
  <div class="ui icon input">
    <input class="prompt" type="text" onChange={(event)=>this.setState({page:this.state.page , searchtext : event.target.value})} placeholder="Search ..." />
  </div>
  <div class="results"></div>
</div>
<br />
        <div class="inline">
        <button class="ui labeled icon button">
        <i class="pills icon" style={{    color: 'green'   }}></i>
        Medicine
        </button>
        <button class="ui right labeled icon button">
        <i class="first aid icon" style={{    color: 'red' }}></i>
        Disease
        </button>
        </div>
        <br />
        <br />

       {this.searchorpopular()}



      </div>
        );
    }
}
export default SearchMain;