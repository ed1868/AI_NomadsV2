import React, { Component } from 'react';
import Header from "../component/header/Header";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/FooterTwo";


 class ComingSoon extends Component {
    
    render() {
        return (
            <>
                <Header />
                {/* Start Page Error  */}
                <div className="error-page-inner bg_color--4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h1 className="title theme-gradient pt-5">Coming Soon!</h1>
                                    <h3 className="sub-title">Our NFT Marketplace is currently being built</h3>
                                    <span>Official launch is 06/01/2021</span>
                                    <div className="error-button">
                                        <a className="btn-default" href="/">Back To Homepage</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Error  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer /> 
            </>
        )
    }
}
export default ComingSoon;
