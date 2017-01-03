/**
 * Created by Jonathan on 9/17/16.
 */


var React = require("react"),
    _ = require("lodash"),
    config = require("../../../config/config.general");
var ReactBootstrap = require('react-bootstrap');
/*    
var Navbar = require('react-bootstrap/lib/Navbar')
var Nav = require('react-bootstrap/lib/Nav')*/
var Header = React.createClass({
    getInitialState: function () {
        return {
            active: 0
        };
    },

    render: function () {
        var menuOptions = config.menuOptions.map(function (opt, idx) {
                            return (<ReactBootstrap.NavItem eventKey={ "menuOption" + idx } href={ opt.link } className="text-right">{ opt.label }</ReactBootstrap.NavItem>);
                          });

        return (
            <div>
                <ReactBootstrap.Navbar fixedTop fluid>
                    <ReactBootstrap.Navbar.Header>
                        <a href="index">
                                <img id="udsm-logo" src="../assets/udsm-logo.png" />
                        </a>
                        <ReactBootstrap.Navbar.Toggle />
                    </ReactBootstrap.Navbar.Header>
                    <ReactBootstrap.Navbar.Collapse>
                        <ReactBootstrap.Nav id="menu" pullRight>
                            { menuOptions }
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Navbar>
            </div>
        );
    },

    componentDidMount: function () {

    }
});

module.exports = Header;
