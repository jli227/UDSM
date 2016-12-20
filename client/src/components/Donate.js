/**
 * Created by Jonathan on 9/25/16.
 */

var React = require("react"),
    _ = require("lodash"),
    config = require("../../../config/config.donate");

var Donate = React.createClass({
    render: function () {
        var sections = _.map(config.sections, function (section, idx) {
            return (
                <div className="container-fluid" key={ section + idx }>
                    <section className="section row">
                        { section.header ? <h2>{section.header}</h2> : <span />}
                        { section.body ? <p>{section.body}</p> : <span />}
                        { section.link ? <a className="btn btn-default" href={section.link.link} target="_blank">{section.link.title}</a> : <span />} 
                        { section.lists ? <div>
                            {
                                _.map(section.lists, function (lists, idx) {
                                    return(<div key={"lists" + idx} className="col-xs-6">
                                            <h2 className="text-center">{lists.header} SUPPLIES</h2>
                                            <ul className="col-xs-offset-3"> 
                                                {
                                                    _.map(lists.list, function (item, idx) {
                                                        return (<li className="moderate text-left " key={ "item" + idx }>{ item }</li>);
                                                    })
                                                }
                                            </ul>
                                        </div> 
                                    );
                                })
                            }
                        </div> : <span />}
                        { section.footer ? <div className="col-xs-12 text-center mini">
                            <h4 className="text-center">{ section.footer }</h4>
                            <a href="https://www.google.com/maps/place/Christ+Episcopal+Church/ 
                            @47.6620429,-122.3164489,17z/data=!4m13!1m7!3m6!1s0x5490148ac03ce907:0xd12ab62e6271ddcc!
                            2s4548+Brooklyn+Ave+NE,+Seattle,+WA+98105!3b1!8m2!3d47.6620429!4d-122.3142602!3m4!1s0x5490148a8509f501:
                            0xdba68cdc779bd9e6!8m2!3d47.6627907!4d-122.3138608" target="_blank">{ section.footerAddress }</a>
                        </div> : <span />} 
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
        
                { sections }
            </div>
        );
    }
});

module.exports = Donate;