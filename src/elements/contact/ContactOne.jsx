import React, { Component } from "react";

class ContactOne extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
        };
    }
    render(){
        return(
            <div className="contact-form--1 mt-5">
                <div className="container">
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
                                <form>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.rnName}
                                            onChange={(e)=>{this.setState({rnName: e.target.value});}}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.rnEmail}
                                            onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
                                            placeholder="Your email *"
                                        />
                                    </label>

    
                                    <button className="btn-default" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 mt-5">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/token/ailogos.jpeg" alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactOne;