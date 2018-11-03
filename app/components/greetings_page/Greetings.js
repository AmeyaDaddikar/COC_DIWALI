import React, {Component} from 'react';
import './greetings.css';

import COC_LOGO from './coc_logo.png';
import HAPPY_DIWALI from './happy_diwali.jpg';

let COC_TITLE = "Community of Coders ";

let initialTextState = {
    coc_text : '',
    wait_count: 0,
    state_count:0,
    cursor: '|'
};

export default class Greetings extends Component{
    constructor(props){
        super(props);
        this.state = initialTextState;

    }

    componentWillMount(){
        this.timerID = setInterval(this.updateText.bind(this), 100, 10);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    updateText(){
        this.setState(function(state, props){
            let state_length = state.coc_text.length;
            
            let new_cursor = state.state_count % 12 == 0 ? '': '|';
            
            state_length =  (state_length + 1) % (COC_TITLE.length + 1);
            if(state_length == COC_TITLE.length)
                if(state.wait_count <= 70){
                    return {
                        coc_text : COC_TITLE.substr(0, state_length-1), 
                        wait_count: state.wait_count + 1,
                        cursor: new_cursor,
                        state_count: state.state_count +1
                    };    
                }
                

            return {
                coc_text : COC_TITLE.substr(0, state_length), 
                wait_count: 0,
                cursor:new_cursor,
                state_count: state.state_count +1
            };    
        });
    }

    render(){
        
        // let GreetDiv = undefined;
        // if(this.state.wait_count > 0)
        //     GreetDiv = ;
        // else
        //     GreetDiv = <h2></h2>;

        return(
            <div className="container-fluid" style={{height:'2000px'}}>
                <img src={COC_LOGO} className="img-fluid|thumbnail logo" alt="COC LOGO"/>
                <h1 className="text-center mt-5 p-2 coc_text">{this.state.coc_text + this.state.cursor}</h1>
                {this.state.wait_count > 13 && this.state.wait_count <= 36 &&
                <h2 className="sub_title text-center mt-5">would like to greet you all...</h2>
                }
                {this.state.wait_count > 36 &&
                    <img src={HAPPY_DIWALI} className="img-fluid|thumbbail happy_diwali mx-auto" alt="happy diwali"/>
                }
            </div>
        );
    }
}