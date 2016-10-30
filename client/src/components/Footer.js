/**
 * Created by Jonathan on 9/25/16.
 */

var React = require("react");

var Footer = React.createClass({

    render: function () {
        return (
            <footer className="footer">
                <div className="container text-center">
                    <h4 className="text-muted">UDSMVOLUNTEER@GMAIL.COM</h4>
                    <p className="text-muted"><a href="https://www.facebook.com">FACEBOOK</a></p>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;
