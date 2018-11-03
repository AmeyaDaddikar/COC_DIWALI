import React, {Component} from 'react';
import './footer.css';

export default class Footer extends Component{
    render(){
        return(
            <div className="p-2 pr-5 footer">
                    <p className="text-right text-white" style={{fontSize:'2em'}}>
                    <a rel="nofollow" className="footer_link" target="_blank" href="https://www.vecteezy.com">Vectors by vecteezy.com</a>&nbsp;&nbsp;&nbsp;&nbsp;<a target="_blank" href="https://github.com/AmeyaDaddikar/COC_DIWALI" className="footer_link">Github Repo</a>
                    </p>
            </div>
        )
    }
}