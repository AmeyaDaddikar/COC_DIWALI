import React, {Component} from 'react';
import Greetings from '../components/greetings_page/Greetings';
import About from '../components/about_page/About';
import Footer from '../components/footer/Footer';

import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component{

    render(){
        return (
            <div className="m-0 p-0" style={{width:'100vw', backgroundColor:'#F4F5F3'}}>
                <Router>
                    <div>
                        <Route exact path="/" component={Greetings} />
                        <Route  path="/about" component={About} />
                        <Footer/>
                    </div>
                </Router>
            </div>
        );
    }
} 