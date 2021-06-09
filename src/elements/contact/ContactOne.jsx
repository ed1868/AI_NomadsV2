import React, { Component } from "react";
import api from '../../Api/api';
import PageHelmet from "../../component/common/Helmet";
import Header from "../../component/header/Header";


class ContactOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomadName: '',
            nomadEmail: '',
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {

        event.preventDefault();
        console.log('ENTRO EN FORM SUBMIT DE TOKENNNN!!! : ', event);

        const formData = {

            firstName: this.state.nomadName,
            email: this.state.nomadEmail,


        }

        console.log('TOKEN FORM DATA : ', formData);

        api.tokenWaitList(formData).then(result => {
            console.log('SUCCESSS NIH : ', result);
        }).catch(err => {
            if (err) {
                console.log('ERROR : ', err)
            }
        })
    }


    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle='NOMA Token' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="contact-form--1 mt-5">
                    <div className="container mt-5">
                        <div className="row row--35 align-items-start">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="section-title text-left mb--50">
                                    <span className="subtitle">Join The Waitlist and Get 100 Tokens on the house</span>
                                    <h2 className="title mt-3"> <span className="theme-gradient">NOMA</span> Token</h2>
                                    {/* <div className="im_address_inner">
                                    <div className="im_address">
                                        <span>Call us directly:</span>
                                        <a className="link im-hover" href="tel:+111 (0)55 5869 8976<">+111 (0)55 5869 8976</a>
                                    </div>
                                    <div className="im_address mt--5">
                                        <span>Contact Email:</span>
                                        <a className="link im-hover" href="mailto:example@gmail.com">example@gmail.com</a>
                                    </div>
                                </div> */}
                                </div>
                                <div className="form-wrapper">
                                    <form onSubmit={(event) => { this.onFormSubmit(event) }} >
                                        <label htmlFor="item01">
                                            <input
                                                type="text"
                                                name="name"
                                                id="item01"
                                                value={this.state.nomadName}
                                                onChange={(e) => { this.setState({ nomadName: e.target.value }); }}
                                                placeholder="Your Name *"
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
                                            />
                                        </label>


                                        <button className="btn-default" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 mt-5">
                                <div className="thumbnail mb_md--30 mb_sm--30">
                                    <img src="/assets/images/token/ailogos.jpeg" alt="trydo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ContactOne;