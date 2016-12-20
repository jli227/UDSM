/**
 * Created by Jonathan on 9/25/16.
 */

var React = require("react"),
    _ = require("lodash"),
    config = require("../../../config/config.contact");

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
                    <h1 className="title">{config.title}</h1>
                    <h5>{config.titleDesc}</h5>
                </section>

                <hr/>

                <section className="section">
                    <form id="send-email" action="/sendMail">
                        <div className="form-group">
                            <label htmlFor="name" className="col-sm-12">Name</label>
                            <div className="col-sm-6">
                                <input id="name" type="text" className="form-control" placeholder="First Name" />
                            </div>
                            
                            <div className="col-sm-6">
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email" className="col-sm-12">Email</label>
                            
                            <div className="col-sm-12">
                                <input id="email" type="email" className="form-control" placeholder="Email Address" />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="subject" className="col-sm-12">Subject</label>
                            
                            <div className="col-sm-12">
                                <input id="subject" type="text" className="form-control" placeholder="Subject" />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message" className="col-sm-12">Message</label>
                            <div className="col-sm-12">
                                <textarea id="message" className="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        
                        <br/>
                        <br/>
                        
                        <div className="col-sm-12 text-center" style={{ marginTop: "50px" }}>
                            <button type="submit" className="btn btn-default">SEND MESSAGE</button>
                        </div>
                    </form>
                </section>

                <hr/>

                { sections }
            </div>
        );
    }
});

module.exports = Contact;
