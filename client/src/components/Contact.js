/**
 * Created by Jonathan on 9/25/16.
 */

var React = require("react"),
    _ = require("lodash"),
    config = require("../../../config/contact");

var Contact = React.createClass({
    render: function () {
        var sections = _.map(config.sections, function (section, idx) {
            return (
                <div>
                    <section className="section" key={ section + idx }>
                        { section.header ? <h2>{section.header}</h2> : <span />}
                        { section.body ? <p>{section.body}</p> : <span />}
                        { section.link ? <a className="btn btn-default" href={section.link.link}>{section.link.title}</a> : <span />}
                    </section>
                    <hr/>
                </div>
            );
        });

        return (
            <div>
                <section className="titleSection">
                    <h1>{config.title}</h1>
                    <h5>{config.titleDesc}</h5>
                </section>

                <hr/>

                <section className="section">
                    <h4>{config.summary}</h4>
                </section>

                <hr/>

                { sections }
            </div>
        );
    }
});

module.exports = Contact;