import React, { Component } from "react";
import api from '../../Api/api';



class ContactTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomadName: '',
            nomadPhone: '',
            nomadEmail: '',
            nomadSubject: '',
            nomadMessage: '',
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);


    }

    onFormSubmit(event) {
        // const { tags } = this.state;
        // this.setState({
        //   tags: tags.filter((tag, index) => index !== i),
        // });
        event.preventDefault();
        console.log('ENTRO EN FORM SUBMIT!!! : ', event);

        const formData = {
            name: this.state.nomadName,
            phone: this.state.nomadPhone,
            email: this.state.nomadEmail,
            subject: this.state.nomadSubject,
            text: this.state.nomadMessage
        }

        console.log('FORM DATA : ', formData);

        api.sendFlare(formData).then(result => {
            console.log('SUCCESSS NIH : ', result);
        }).catch(err => {
            if (err) {
                console.log('ERROR : ', err)
            }
        })
    }


    render() {
        return (
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <span className="subtitle">Let's Say Hi</span>
                                <h2 className="title">Contact With Us.</h2>
                                <div className="im_address">
                                    <span>Call us directly:</span>

                                    <a className="link im-hover" href="tel:+786 608 6021">+786 608 6021</a>
                                </div>
                                <div className="im_address mt--5">
                                    <span>Contact Email:</span>
                                    <a className="link im-hover" href="email">ainomadsmiami@gmail.com</a>
                                </div>
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={(event) => { this.onFormSubmit(event) }}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.nomadName}
                                            onChange={(e) => { this.setState({ nomadName: e.target.value }); }}
                                            placeholder="Your Name *"
                                            required
                                        />
                                    </label>



                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.nomadEmail}
                                            onChange={(e) => { this.setState({ nomadEmail: e.target.value }); }}
                                            placeholder="Your email *"
                                            required
                                        />
                                    </label>

                                    <label htmlFor="item05">
                                        <input
                                            type="tel"
                                            id="item05"
                                            name="phone"
                                            //   IF YOU NEED A CERTAIN PATTERN UNCOMMENT THIS
                                            //   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            value={this.state.nomadPhone}
                                            onChange={(e) => { this.setState({ nomadPhone: e.target.value }) }}
                                            placeholder="Your phone number"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.nomadSubject}
                                            onChange={(e) => { this.setState({ nomadSubject: e.target.value }); }}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.nomadMessage}
                                            onChange={(e) => { this.setState({ nomadMessage: e.target.value }); }}
                                            placeholder="Your Message *"
                                            required
                                        />
                                    </label>
                                    <button className="btn-default" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/founder.jpeg" alt="trydo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;