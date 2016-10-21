/**
 * Created by Jonathan on 9/25/16.
 */

var React = require("react"),
    _ = require("lodash"),
    config = require("../../../config/config.general");

var Footer = React.createClass({
    getInitialState: function () {
        return {
            active: 0
        };
    },

    render: function () {
        var menuOptions = config.menuOptions.map(function (opt, idx) {
            return (<li key={ "menuOption" + idx }><a href={opt.link}>{ opt.label }</a></li>);
        });
        return (
            <div>
                <nav className="navbar navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="index">
                                <img id="udsm-logo" src="../assets/udsm-logo.png" />
                            </a>
                            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#collapseNav"
                                    aria-controls="#collapseNav" aria-expanded="false" aria-label="Toggle navigation">
                                &#9776;
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="collapseNav">
                            <ul id="menu" className="nav navbar-nav navbar-right">
                                { menuOptions }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    },

    componentDidMount: function () {

    }
});

module.exports = Footer;
