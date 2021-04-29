import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast, FiLayers, FiUsers, FiMonitor, FiChevronUp, FiMail, FiCopy } from "react-icons/fi";

import { FiActivity, FiMap } from "react-icons/fi";

import {
    FaReact,
    FaSass
} from "react-icons/fa";
import {
    FiSmartphone,
    FiCode,
    FiDownload,
    FiCommand,
    FiHeadphones,
    FiBold,
} from "react-icons/fi";

import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import ServiceTwo from "../elements/service/ServiceTwo";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Business Stratagy',
        description: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.'
    },
    {
        icon: <FiLayers />,
        title: 'Website Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Reporting',
        description: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.'
    },
    {
        icon: <FiMonitor />,
        title: 'Mobile Development',
        description: 'Desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        icon: <FiMail />,
        title: 'Email Marketing',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.'
    },
    {
        icon: <FiCopy />,
        title: 'Copywriting',
        description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for.'
    },
]


const featureList = [
    {
        icon: <FaReact />,
        title: 'Latest React Bundle',
        subtitle: 'We use the latest React framework version for a clean user friendly interface. '
    },
    {
        icon: <FiSmartphone />,
        title: 'Perfect Responsive',
        subtitle: 'Our apps and websites are Perfect for all devices.'
    },
    {
        icon: <FiCode />,
        title: 'Blockchain and Ethereum',
        subtitle: 'We have implemented Ethreum protocols with Solidity and Web3.js to give our clients a head start on blockchain technology.'
    },
    {
        icon: <FaSass />,
        title: 'Sass',
        subtitle: 'We use Sass in every project to give logic to our styles.'
    },
    {
        icon: <FiDownload />,
        title: 'Fast Loading Speed',
        subtitle: 'Our team is fast. Our Artificial Intelligence models? Even Faster '
    },
    {
        icon: <FiCommand />,
        title: 'Modern Design',
        subtitle: 'AI Nomads is a modern creative team that doesnt get with the times. It goes beyond them.'
    },
    {
        icon: <FiHeadphones />,
        title: '24 Support System',
        subtitle: 'We provide 24 hour support for all clients. We are one click away.'
    },
    {
        icon: <FiBold />,
        title: 'Bitcoin and alt coins',
        subtitle: 'With blockchain we intergrate payment systems like Bitcoin and other Alt Coins.'
    }
]




class Service extends Component {
    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle='Services' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Services'} />
                {/* End Breadcrump Area */}


                {/* Start Feature Area  */}
                <div id="feature" className="service-area bg_color--10 ptb--120">
                    <div className="wrapper plr--120">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center pb--30">
                                    <span className="subtitle">Intelligent Magic</span>
                                    <br></br>
                                    <h2 className="title theme-gradient">Our Awesome Features</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row service-main-wrapper ">
                            {/* Start Single Feature  */}
                            {featureList.map((value, i) => (
                                <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 " key={i}>
                                    <div className="service service__style--2 text-left ">
                                        <div className="icon">
                                            {value.icon}
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{value.title}</h3>
                                            <p className="subtitle">{value.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* End Single Feature  */}
                        </div>
                    </div>
                </div>
                {/* End Feature Area  */}


                <div className="service-area pb--120 bg_color--10 pt-5">
                    <div className="container">
                        <ServiceTwo />
                    </div>
                </div>


                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />


            </React.Fragment>
        )
    }
}
export default Service;