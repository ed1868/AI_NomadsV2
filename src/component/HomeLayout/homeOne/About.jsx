import React, { Component } from "react";
import { FiSend } from "react-icons/fi";

import { Link } from 'react-router-dom';
class About extends Component {
    render() {
        let title = 'Software You Can Trust.',
            description = 'At AI Nomads, we ensure the future of AI is ethically safe. We write code that helps solve business problems while ensuring the core values we hold true to our society remain untouched. ',
            description2 = 'Honesty, Equality, and Fairness for All.',
            description3 = 'We believe Artificial Intelligence is our future and we promise to build the future with a strict code of Ethics one APP at a time. ';

        return (
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-1.jpeg" alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <div className="icon">
                                            <FiSend />
                                        </div>
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                        <p className="description">{description2}</p>
                                        <p className="description">{description3}</p>
                                        <div className="row pt-4">
                                            <div className="col-md-6">
                                                <div className="purchase-btn">
                                                    <Link className="btn-transparent" to="/">DONATE</Link>
                                                </div>

                                            </div>
                                            <div className="col-md-6">
                                                <div className="purchase-btn">
                                                    <Link className="btn-transparent" to="/">PURCHASE NOMAD COINS</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;