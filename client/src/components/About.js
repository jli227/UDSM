/**
 * Created by Jonathan on 9/25/16.
 */

var React = require("react"),
    _ = require("lodash"),
    config = require("../../../config/config.about");

var About = React.createClass({
    render: function () {
        var sections = _.map(config.sections, function (section, idx) {
            return (
                <div key={ section + idx }>
                    <section className="section">
                        { section.header ? <h2>{section.header}</h2> : <span />}
                        { section.body ? <div className="col-sm-10 col-sm-offset-1">{section.body}<br/><br/></div> : <span />}
                        { section.link ? <div className="col-xs-12"><a className="btn btn-default" href={section.link.link}>{section.link.title}</a></div> : <span />}
                    </section>
                    <hr/>
                </div>
            );
        });

        return (
            <div>
                <section className="titleSection">
                    <h1 className="title">{config.title}</h1>
                    <h5>{config.titleDesc}</h5>
                </section>
                
                <hr/>

                { sections }
            </div>
        );
    }
});

module.exports = About;
