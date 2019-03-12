import React from 'react';
import Speech from './speech';
import Searchmain from './Search/searchmain';
import About from './About/About';
//https://static.thenounproject.com/png/925936-200.png
class Main extends React.Component{
	
	state ={page : 1};
	//page :1 chat 
	//page : 2 Populr search
	//page : 3 about


	
	conditionalRender(){
		if(this.state.page === 1)
		{

		return(<div><Speech /></div>);

		}
		if(this.state.page === 2){

			return(<div><Searchmain /></div>);
		}
		if(this.state.page === 3)
		{

			return(<About />);
		}

}
		onclickhome=()=>{

			this.setState({page : 1}) ;
		}
		onclickpopular=()=>{
			this.setState({page : 2}) ;

		}
		onclickabout=()=>{
			this.setState({page : 3}) ;

		}
		


    render(){

		


        return(
			
			<div className="ui container" >
			<center><h1 className="scale-up-center"><b>Ayush</b></h1></center>
            <div class="ui container three item menu" style = {{margin : ' 20px' , marginLeft : '20px' , marginRight :'20px',borderRadius:'30px'}}>
  			<a class="item" href="#" onClick={this.onclickpopular}>Search </a>
  			<a class="ui inverted item  " href="#" onClick={this.onclickhome}>Home</a>
  			<a class="item " href="#" onClick={this.onclickabout}>About</a>

			</div>

			<center>{this.conditionalRender()}</center>
			</div>
                    



        );
    }
}
export default Main ;