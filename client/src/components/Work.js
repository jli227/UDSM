/**
 * Created by Jonathan on 9/25/16.
 */

var React = require("react"),
    _ = require("lodash"),
    config = require("../../../config/config.work");

var Work = React.createClass({
    render: function () {
        var sections = _.map(config.sections, function (section, idx) {
            return (
                <div key={ section + idx }>
                    <section className="section">
                        <div className="col-sm-6 col-sm-offset-3">
                            { section.header ? <h2>{section.header}</h2> : <span />}
                            { section.body ? <p>{section.body}</p> : <span />}
                            { section.header2 ? <h2>{section.header2}</h2> : <span />}
                            { section.list3 ?
                                <ul>
                                    {
                                        _.map(section.list3, function (item, idx) {
                                            return (<li className="moderate" key={ "item" + idx }>{ item }</li>);
                                        })
                                    }
                                </ul> : <span />
                            }
                            { section.body2 ? <p>{section.body2}</p> : <span />}
                            { section.header3 ? <h2>{section.header3}</h2> : <span />}
                            { section.list ?
                                <ul>
                                    {
                                        _.map(section.list, function (item, idx) {
                                            return (<li className="moderate" key={ "item" + idx }>{ item }</li>);
                                        })
                                    }
                                </ul> : <span />
                            }
                            { section.list2 ?
                                <ul>
                                    {
                                        _.map(section.list2, function (item, idx) {
                                            return (<li className="moderate col-xs-6 out_goals" key={ "item" + idx }>{ item }</li>);
                                        })
                                    }
                                </ul> : <span />
                            }
                            { section.link ? <a className="btn btn-default" href={section.link.link}>{section.link.title}</a> : <span />}
                        </div>
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

                { sections }
            </div>
        );
    }
});

module.exports = Work;