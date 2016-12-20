/**
 * Created by Jonathan on 9/25/16.
 */

var React = require("react"),
    _ = require("lodash"),
    config = require("../../../config/config.events");

var Events = React.createClass({
    render: function () {
        var sections = _.map(config.sections, function (section, idx) {
            return (
                <div className="container-fluid" key={ section + idx }>
                    <section className="section row">
                        { section.header ? <h2>{section.header}</h2> : <span />}
                        
                        { section.body ? <p>{section.body}</p> : <span />}
                        { section.calheader ? <div className="text-left col-xs-12 col-s-2 col-md-2">
                            { section.calheader ? <h2 className="calendar-title">{ section.calheader }</h2> : <span />}
                            { section.cal ?
                                    <ul className="month-list">
                                        {
                                            _.map(section.cal, function (item, idx) {
                                                return (<li className="moderate" key={ "item" + idx }><a href="#">{ item }</a></li>);
                                            })
                                        }
                                    </ul> : <span />
                            }
                        </div> : <span />}
                        { section.events ?
                            <div className="col-xs-12 col-s-9 col-s-offset-1 col-md-10 text-left">
                                {
                                    _.map(section.events, function (events, idx) {
                                        return (<div key={ "events" + idx }> 
                                                    <h2 className="text-left">UDSM {events.title}</h2>
                                                    <p>{events.date}</p>
                                                    <p>{events.time}</p>
                                                    <p>{events.body}<a href={events.link}>Learn More</a></p>
                                                </div>
                                                );
                                    })
                                }
                            </div> : <span />
                        }
                        { section.link ? <a className="btn btn-default" href={section.link.link} target="_blank">{section.link.title}</a> : <span />}
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

module.exports = Events;