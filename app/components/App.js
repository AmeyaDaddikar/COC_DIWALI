import React, {Component} from 'react';
import Greetings from '../components/greetings_page/Greetings';
import Footer from '../components/footer/Footer';


export default class App extends Component{

    render(){
        return (
            <div className="m-0 p-0" style={{width:'100vw', backgroundColor:'#F4F5F3'}}>
                <Greetings/>
                <Footer/>
            </div>
        );
    }
} 