import React, {Component} from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

export default class Footer extends Component{
    render(){
        return(
            <div className="p-1 pr-3 footer">
                    <p className="text-right text-white" style={{fontSize:'2em'}}>
                    {/* <a rel="nofollow" className="footer_link" target="_blank" href="https://www.vecteezy.com">Vectors by vecteezy.com</a>&nbsp;&nbsp;&nbsp;&nbsp; */}
                    {/* Link is the <a> tag that routes to the react-router routes */}
                    <Link to={'/COC_DIWALI' + "/"} className="footer_link">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={'/COC_DIWALI' + "/about"} className="footer_link">About this Repo</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a target="_blank" href="https://github.com/AmeyaDaddikar/COC_DIWALI" className="footer_link">Github</a>
                    </p>
            </div>
        )
    }
}