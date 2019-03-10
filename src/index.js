import React from 'react';
import ReactDOM from 'react-dom';
import Start from './Start/start';
import Tree from './Tree/tree';
import Main from './Main/main';
import './index.css';


class Ayush extends React.Component{
    state = {  page : 1};


    
    //Page : 1 Loading Tree logo 
    //Page : 2 Start Page 
    componentDidMount(){

        setTimeout(
            function() {
                this.setState({page : 2});
            }
            .bind(this),
            3000
        );
    }

    onClickStartPage=(set)=>{
        this.setState({page:set});
    }
    renderCondition =() =>{
        if(this.state.page === 1)
        {
            return(<Tree />);
        }
       if(this.state.page === 2)
        {
            return(
                
                <Start onClickButton={this.onClickStartPage} />
            );
        }
        if(this.state.page === 3)
        {
            return(
                <Main/>

            );
        }
        

    }


    render(){

        return(<div className = "Ayush"> {this.renderCondition()} </div>);
        
    }
}

ReactDOM.render(<Ayush />,document.querySelector("#root"));