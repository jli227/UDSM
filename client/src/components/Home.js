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
                        { section.body ? <div className="col-sm-10 col-sm-offset-1">{section.body}<br/><br/></div> : <span />}
                        { section.link ? <div className="col-xs-12"><a className="btn btn-default" href={section.link.link}>{section.link.title}</a></div> : <span />}
                    </section>
                    <hr/>
                </div>
            );
        });
        
        var partners = _.map(config.partners, function (partner, idx) {
            return (
                <div key={ partner + idx} className="col-sm-offset-1 col-sm-2" style={{ height: "200px" }}>
                    <img style={{ maxWidth: "200px", maxHeight: "200px", verticalAlign: "center" }} src={ "../assets/partners/" + partner + ".png"} />
                </div>
            );
        });

        return (
            <div>
                <section className="titleSection page1">
                    <h1 className="title">{config.title}</h1>
                    <h5>{config.titleDesc}</h5>
                    <div className="col-xs-12">
                        <a href={config.link.link} className="btn btn-secondary btn-lg title-button">{config.link.title}</a>
                    </div>
                </section>

                <hr/>

                <section className="section">
                    <h5>We are a student-run interdisciplinary, volunteer organization dedicated to improving health equity 
                    among the homeless population within the University District.</h5>
                </section>

                <hr/>

                <section className="section">
                    <h2>The Facts</h2>
                    
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="margin-bottom">
                                <span className="facts">4,505</span> people sleep outdoors in King County. (Seattle's One Night Count, 2016)
                            </p>
                            <p className="margin-bottom">
                                <span className="facts">300</span> people sleeping outdoors or in shelters in Seattle's University District
                            </p>
                            <p className="margin-bottom">
                                <span className="facts">52%</span> reported not having received any preventative or screening services in the past year.
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <p>
                                Within this population, health concerns are extensive and unique, with many health concerns that would benefit from acute and preventative care. 
                                In our November 2013 needs assessment, the most commonly mentioned chronic health problems were tooth and gum disease, mental health disorders, chronic pain, especially back pain and arthritis, and alcoholism or other addictions. Also frequently mentioned were respiratory disease and chronic infections, particularly hepatitis. 
                                Reports of chronic health problems likely underestimate the actual incidence of these problems. 
                            </p>
                        </div>
                    </div>
                    
                </section>
                
                <hr/>
                
                { sections }
                
                <section className="section partners">
                    <h1>PARTNERS</h1>
                    { partners }
                </section>
                
                <hr/>
            </div>
        );
    }
});

module.exports = Home;