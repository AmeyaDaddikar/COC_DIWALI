# COC Diwali Single Page Application
### Made on React JS

## WISH YOU ALL A VERY HAPPY DIWALI

```
# To run the Repo on localhost
npm run start

# To build repo files
npm run build

# Deploys directly to github pages (Redundant)
npm run deploy
```


NOTE: In webpack.config.js, change mode to development for faster changes in code,
and change mode to production to build minified and optimized JS code

(P.S. Deployment is a pain in the butt, period. -_-)


## What are Single Page Applications? (SPAs)
SPAs, to put it simply, are websites that can be loaded in a single go on your browser. It is like using an App on your mobile, where you need not download a new Acitivy/Page every time you click something. The app has already been loaded once. When you loaded this site, behind the scenes, both the Home page and the About page loaded together. So the browser does not need to load the pages again. Heck, you can now view this site offline as well!!!(as long as you keep the tab open ;p)

## How does React work?
The React project consists of various 'Components'. Each component has it's own states and properties. The way React works is that based on these properties(props) and states, it renders a virtual DOM (Document Objec Model) which in term determines what should be shown on the real DOM.

## What are these components?
Components can be anything from HTML elements like divs, headers, etc.. to custom wrapper components that control other components. For example, the website has 2 components, <Greetings/> and <About/> are the two components. The <Greetings/> component has another component called <HappyDiwali/> within it. There are a tonne of possibilities of components here. You can create components for individual tag if you want ;p

## How does the routing work?
The [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) enables Javscript to consider routes or pages as states, and you can change from one state to another. Basically it means I can manipulate the browser history to put in pages using Javscript rather than actually loading pages from the server. So I need not connect to the internet to open About page or Home page again since Javascript is loading those pages.

## I still didn't get it. I want to know more. Where should I look?
You should definitely check out the [React Tutorial](https://reactjs.org/tutorial/tutorial.html). It has a great starter code and an amazing step by step tutorial to give you a clear understanding of the basic concepts.

Once you are comfortable with React, you can move onto [React Routing](https://reacttraining.com/react-router/web/example/basic). This is bit tricky to understand at first especially with JS examples rather than JSX on the site. Check out [Advance JS Tutorial](https://www.youtube.com/watch?v=s6SH72uAn3Q&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf) in case you don't understand stuff like arrow functions, or 'let', etc.
Additional Resources if you feel quite confident, and want to explore more:
[Building React Project from Scratch(no create-react-app)](https://www.codecademy.com/articles/react-setup-i)
[Redux : State Management Libarary that goes hand in hand with React](https://egghead.io/courses/getting-started-with-redux)
