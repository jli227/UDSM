/**
 * Created by Jonathan on 9/25/16.
 */

var React = require("react"),
    _ = require("lodash"),
    config = require("../../../config/config.news");

var News = React.createClass({
    render: function () {
        var curDate = new Date();
        var curMonth = curDate.getMonth();
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
                    <h1 className="title">{config.title}</h1>
                </section>

                <hr/>

                <section className="section container-fluid">
                    <div className="row">
                        {config.calheader ? <div className="text-left col-xs-12 col-s-2 col-md-2">
                                { config.calheader ? <h2 className="calendar-title">{ config.calheader }</h2> : <span />}
                                { config.months ?
                                        <ul className="month-list">
                                            {
                                                _.map(config.months, function (month, idx) {
                                                    if (idx <= curMonth) {
                                                        return (<li className="moderate" key={ month + idx}><a href="#">{ month + " " + curDate.getFullYear()}</a></li>);
                                                    }
                                                })
                                            }
                                        </ul> : <span />
                                }
                            </div> : <span />
                        }
                        { config.events ?
                            <div className="col-xs-12 col-s-9 col-s-offset-1 col-md-10 text-left">
                                {
                                    _.map(config.events, function (events, idx) {
                                        return (<div key={ "events" + idx }> 
                                                    <h2 className="text-left">UDSM {events.title}</h2>
                                                    <p>{events.date}</p>
                                                    <p>{events.time}</p>
                                                    <p>{events.body}</p>
                                                </div>
                                                );
                                    })
                                }
                            </div> : <span />
                        }
                    </div>
                </section>

                <hr/>

                { sections }
            </div>
        );
    }
});

module.exports = News;