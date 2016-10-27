/**
 * Created by Jonathan on 9/17/16.
 */

var React = require("react"),
    ReactDOM = require("react-dom"),

    header = document.getElementById("header"),
    main = document.getElementById("main"),
    footer = document.getElementById("footer"),
    
    // common components
    Header = require("./components/Header"),
    Footer = require("./components/Footer"),
    
    // page components
    Home = require("./components/Home"),
    Events = require("./components/Events"),
    News = require("./components/News"),
    About = require("./components/About"),
    Work = require("./components/Work"),
    Donate = require("./components/Donate");

window.React = React;

ReactDOM.render(<Header />, header);

if (window.location.pathname) {
    switch (window.location.pathname.substr(1)) {
        case "events":
            ReactDOM.render(<Events />, main);
            break;
        case "news":
            ReactDOM.render(<News />, main);
            break;
        case "about":
            ReactDOM.render(<About />, main);
            break;
        case "work":
            ReactDOM.render(<Work />, main);
            break;
        case "donate":
            ReactDOM.render(<Donate />, main);
            break;
        default:
            ReactDOM.render(<Home />, main);
    }
}
ReactDOM.render(<Footer />, footer);