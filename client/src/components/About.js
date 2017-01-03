/**
 * Created by Jonathan on 9/25/16.
 */

var React = require("react"),
    _ = require("lodash"),
    config = require("../../../config/config.about");
function leaders (leader, idx) {
            return (
                    <div key={ leader.name } className="col-sm-6">
                        <img className="center-block" src={"../assets/leaders/" + leader.img } style={{ width: "300px", height: "200px", verticalAlign: "center" }}/>
                        <p className="text-center">{ leader.name }</p>
                        <p className="text-center smallText">{ leader.title }</p>
                        <div>
                            {
                                _.map(leader.description, function (descriptions, idx) {
                                    return (
                                        <p key={"description" + idx }> { descriptions }</p>
                                    )
                                })
                            }
                        </div>
                    </div>
            );
        }
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
        

        var leaderBios1 = _.map(config.leaderBios1, leaders);

        var leaderBios2 = _.map(config.leaderBios2, leaders);

        var leaderBios3 = _.map(config.leaderBios3, leaders);

        var leaderBios4 = _.map(config.leaderBios4, leaders);

        return (
            <div>
                <section className="titleSection page5">
                    <h1 className="title">{config.title}</h1>
                    <h5>{config.titleDesc}</h5>
                </section>
                
                <hr/>

                { sections }
                <h1>Meet The Team</h1>
                <section className="row">
                    { leaderBios1 }
                </section>
                <section className="row">
                    { leaderBios2 }
                </section>
                <section className="row">
                    { leaderBios3 }
                </section>
                <section className="row">
                    { leaderBios4 }
                </section>
                <hr/>
            </div>
        );
    }
});

module.exports = About;
