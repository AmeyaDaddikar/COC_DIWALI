import React, {Component} from 'react';

export default class About extends Component{
    render(){
        return(
        <div className="container-fluid px-4 pt-5">
            <h1>Single Page Applications</h1>
            <ol className="mt-3">
                <li>
                    <h5>So what is this website about?</h5>
                    <p>This weekend we would like to introduce you guys to Single Page Applications. Consider this as refresher from the boring ESE studies and submissions xD. 
                        The website you are currently seeing is made on ReactJS which is one of the well-known Javascript Based Front End framework.
                        Other such frameworks include Vue JS and Angular.
                    </p>
                </li>
                <li>
                    <h5>What are Single Page Applications? (SPAs)</h5>
                    <p>
                        SPAs, to put it simply, are websites that can be loaded in a single go on your browser. 
                        It is like using an App on your mobile, where you need not download a new Acitivy/Page every time you click something. The app has already been loaded once.
                        When you loaded this site, behind the scenes, both the Home page and the About page loaded together. So the browser does not need to load the pages again. Heck, you can now view this site offline as well!!!(as long as you keep the tab open ;p)
                    </p>
                </li>
                <li>
                    <h5>How does React work?</h5>
                    <p>
                        The React project consists of various 'Components'. Each component has it's own states and properties. The way React works
                        is that based on these properties(props) and states, it renders a virtual DOM (Document Objec Model) which in term determines what 
                        should be shown on the real DOM.
                    </p>
                </li>
                <li>
                    <h5>What are these components?</h5>
                    <p>
                        Components can be anything from HTML elements like divs, headers, etc.. to custom wrapper components that control other components.
                        For example, the website has 2 components, &lt;Greetings/&gt; and &lt;About/&gt; are the two components. The &lt;Greetings/&gt; component 
                        has another component called &lt;HappyDiwali/&gt; within it. There are a tonne of possibilities of components here. You can create components
                        for individual tag if you want ;p 
                    </p>
                </li>
                <li>
                    <h5>How does the routing work?</h5>
                    <p>
                        The <a href="https://developer.mozilla.org/en-US/docs/Web/API/History">History API</a> enables Javscript to 
                        consider routes or pages as states, and you can change from one state to another. Basically it means I can manipulate the 
                        browser history to put in pages using Javscript rather than actually loading pages from the server. So I need not connect to the internet 
                        to open About page or Home page again since Javascript is loading those pages.
                    </p>
                </li>
                <li>
                    <h5>I still didn't get it. I want to know more. Where should I look?</h5>
                    <p>
                        You should definitely check out the <a href="https://reactjs.org/tutorial/tutorial.html">React Tutorial</a>. 
                        It has a great starter code and an amazing step by step tutorial to give you a clear understanding of the basic concepts.
                        <br/>
                        <br/>
                        Once you are comfortable with React, you can move onto <a href="https://reacttraining.com/react-router/web/example/basic">React Routing</a>. This
                        is bit tricky to understand at first especially with JS examples rather than JSX on the site. Check out <a href="https://www.youtube.com/watch?v=s6SH72uAn3Q&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf">Advance JS Tutorial </a>
                        in case you don't understand stuff like arrow functions, or 'let', etc.
                        <br/>
                        Additional Resources if you feel quite confident, and want to explore more:
                        <ul>
                            <li>
                                <a href="https://www.codecademy.com/articles/react-setup-i">Building React Project from Scratch(no create-react-app)</a>
                            </li>
                            <li>
                                <a href="https://egghead.io/courses/getting-started-with-redux">Redux : State Management Libarary that goes hand in hand with React</a>
                            </li>
                        </ul>
                    </p>
                </li>
            </ol>
            <br/>
            <br/>
            <h3 className="text-center">Once again, Happy Holidays ; )</h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
        );
    }
}