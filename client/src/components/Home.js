/**
 * Created by Jonathan on 9/25/16.
 */

var React = require("react"),
    _ = require("lodash"),
    config = require("../../../config/config.home");

var Home = React.createClass({
    render: function () {
        var sections = _.map(config.sections, function (section, idx) {
            return (
                <div key={ section + idx }>
                    <section className="section">
                        { section.header ? <h2>{section.header}</h2> : <span />}
                        { section.body ? <div className="col-sm-6 col-sm-offset-3">{section.body}<br/><br/></div> : <span />}
                        { section.link ? <div className="col-xs-12"><a className="btn btn-default" href={section.link.link}>{section.link.title}</a></div> : <span />}
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
                    <h2>The Facts</h2>
                    
                    <div className="col-sm-6 col-sm-offset-3">
                        <p>
                            <span className="facts">4,505</span> people sleeping outdoors in King County. (Seattle's One Night Count, 2016)
                        </p>
                        <p>
                            <span className="facts">300</span> people sleeping outdoors or in shelters in Seattle's University District
                        </p>
                        <p>
                            <span className="facts">52%</span> reported not having received any preventative or screening services in the past year.
                        </p>
                        
                        <p>
                            Within this population, health concerns are <b>extensive and unique</b>, with many health concerns that
                            would benefit from acute and preventative care.
                        </p>
        
                        <p>
                            In our November 2013 needs assessment, the most commonly mentioned chronic health problems were
                            tooth and gum disease, mental health disorders, chronic pain, especially back pain and arthritis, and
                            alcoholism or other addictions. Also frequently mentioned were respiratory disease and chronic
                            infections, particularly hepatitis.
                        </p>
                        
                        <p>
                            Reports of chronic health problems likely <b>underestimate the actual incidence</b> of these problems.
                        </p>
                    </div>
                    
                </section>
                
                <hr/>

                { sections }
            </div>
        );
    }
});

module.exports = Home;