import React, { Component, Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import PortfolioMasonry from "../elements/portfolio/PortfolioMasonry";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ProgressOne from "../blocks/progressbar/ProgressOne";
import ServiceTwo from "../elements/service/ServiceTwo";
import Particles from 'react-particles-js';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'AI Nomads',
        description: 'Take Control of your Digital Footprint. Everywhere you go',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'Fast Performance',
        description: 'Optimized for a smaller build size, faster dev compilation and dozens of other improvements.'
    },
    {
        icon: <FiCast />,
        title: 'Perfect Responsive',
        description: 'Our web and mobile apps are perfect for all devices. You can visit and share from any screen.'
    },
    {
        icon: <FiMap />,
        title: 'Fast & Friendly Support',
        description: 'We are provide 24 hours support for all clients.Every customer has their personal agent.'
    },
]


class HomePortfolio extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <div className="active-dark bg_color--10">
                <Helmet pageTitle="Home Portfolio" />

                {/* Start Header Area  */}
                <Header />
                {/* End Header Area  */}
                <div className="slider-activation slider-creative-agency with-particles" id="home">
                    <div className="frame-layout__particles">
                        <Particles
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 100
                                    },
                                    "size": {
                                        "value": 3
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className="im_modern_slider bg_image bg_image--24 ">
                        {SlideList.map((value, index) => (
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                {value.description ? <p className="text-white pt-5">{value.description}</p> : ''}
                                                {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-large" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



                {/* Start Service Area */}
                <div className="service-wrapper service-white pt-5 pb-5">
                    <div className="row row--25">
                        {ServiceList.map((val, i) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                <div className="service service__style--1">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h4 className="title">{val.title}</h4>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* End Service Area */}



                {/* Start Slider Area   */}
                {/* <div className="slider-wrapper"> */}

                {/* Start Single Slide */}
                {/* {SlideList.map((value , index) => (
                        <div className="slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image bg_image--24" key={index} data-black-overlay="6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-border btn-opacity" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))} */}
                {/* End Single Slide */}
                {/* </div> */}
                {/* End Slider Area   */}

                {/* Start portfolio Area  */}
                <div className="rn-portfolio-area bg_color--10 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <span className="subtitle">Artificial Intelligence Nomads</span>
                                    <br></br>
                                    <h2 className="title theme-gradient">Building a future you can trust</h2>
                                    <p className="description">Artificial Intelligence is inevitable, our goal is to ensure the future of AI is ethically safe<br /> by solving business problems with the values and intergrity we deserve.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper plr--30">
                        <div className="row">
                            <PortfolioMasonry item="8" column="col-lg-3 col-md-6 col-sm-6 col-12 portfolio-tilthover" />
                        </div>
                        {/* <div className="row">
                            <div className="col-md-12">
                                <div className="view-more-btn mt--60 text-center">
                                    <a className="btn-default" href="/portfolio"><span>View More Project</span></a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* End portfolio Area  */}

                <div className="service-area pb--120 bg_color--10">
                    <div className="container">
                        <ServiceTwo />
                    </div>
                </div>

                {/* Start Progress Bar Area   */}
                <div className="rn-progress-area pb--120 bg_color--10">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/team.jpeg" alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                                <div className="progress-content-here">
                                    <div className="section-title text-left">
                                        <span className="subtitle">Our Squad</span>
                                        <h2 className="title">Agency Skill Levels</h2>
                                        <p className="description">Our Miami Team continuous to achieve excellence.</p>
                                    </div>
                                    <ProgressOne ProgressStyle="progress-bar--3" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* End Progress Bar Area   */}

                {/* Start Brand Area */}
                <div className="rn-brand-area pb--120 bg_color--10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <span className="subtitle">Top video</span>
                                    <h2 className="title">Our Clients Review</h2>
                                </div>
                            </div>
                        </div>
                        <div className="video-image-wrapper mt--30">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <div className="thumb position-relative">
                                            <img className="w-100" src="/assets/images/blog/bl-big-02.jpg" alt="Service Images" />
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({ isOpen: false })} />
                                            <button className="video-popup position-top-center theme-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                {/* Start Footer Area  */}
                <FooterTwo />
                {/* End Footer Area  */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </div>
        )
    }
}
export default HomePortfolio;