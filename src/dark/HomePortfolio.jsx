import React, { Component, Fragment, useEffect } from "react";
import ScrollToTop from 'react-scroll-up';
import PortfolioMasonry from "../elements/portfolio/PortfolioMasonry";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ProgressOne from "../blocks/progressbar/ProgressOne";
import ProgressTwo from "../blocks/progressbar/ProgressTwo";
import ServiceTwo from "../elements/service/ServiceTwo";
import Particles from 'react-particles-js';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import Web3 from 'web3';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';


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
    FiChevronUp
} from "react-icons/fi";


const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'AI Nomads',
        description: 'Take Control of your Digital Footprintsssss. Everywhere you go',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
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
    // async componentWillMount() {
    //     await this.loadWeb3()
    //     await this.loadBlockchainData()
    //   }

    constructor() {
        super()
        this.state = {
            isOpen: false,
            
        }
        this.openModal = this.openModal.bind(this)
    }


    //   async loadWeb3() {
    //     if (window.ethereum) {
    //       window.web3 = new Web3(window.ethereum)
    //       await window.ethereum.enable()
    //     }
    //     else if (window.web3) {
    //       window.web3 = new Web3(window.web3.currentProvider)
    //     }
    //     else {
    //     //   window.alert('Non-Ethereum browser detected. You should consider downloading and connecting a hardwallet like Metamask!');
    //       this.setState({ preview: true });
    //       this.setState({ loading: false });
    //     }
    //   }
      

    //   async loadBlockchainData() {
    //     const web3 = window.web3
    //     if (web3 == undefined) {
    //       this.setState({ preview: true });
    //       this.setState({ loading: false });
    //       return;
    //     }
    //     // Load account
    //     const accounts = await web3.eth.getAccounts()
    
    //     console.log(`THESE ARE THE ACCOUNTS : ${accounts}`);
    //     this.setState({ account: accounts[0] })
     
    
    //   }


    openModal() {
        this.setState({ isOpen: true })
    }


    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
      }
    render() {

        return (
            <div className="active-dark bg_color--10">
                <Helmet pageTitle="Home Portfolio" />

                {/* Start Header Area  */}
                <Header  />
                {/* End Header Area  */}
                <div className="slider-activation slider-creative-agency with-particles" id="home">
                    <div className="frame-layout__particles">
                        <Particles
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 150
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
                    <div className="im_modern_slider bg_image bg_image--28 ">
                        {SlideList.map((value, index) => (
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                {value.description ? <p className="text-white pt-5">{value.description}</p> : ''}
                                                {/* {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-large" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''} */}
                                                {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-large" href="#blockchainTrust">Explore</a></div> : ''}
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
                <div id="blockchainTrust" className="rn-portfolio-area bg_color--10 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <span className="subtitle">Artificial Intelligence Nomads</span>
                                    <br></br>
                                    <h2 className="title theme-gradient">Building a Blockchain future you can trust</h2>
                                    <p className="description">Artificial Intelligence is inevitable, our goal is to ensure the future of AI is ethically safe<br /> by solving business problems with the values and intergrity we deserve.<br></br>
                                        <br></br>
                                    We speciallize in Blockchain Technology using Ethereum, Solidity and Web3.
                                    </p>
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
                                    <ProgressTwo ProgressStyle="progress-bar--2" />
                                    {/* <ProgressOne ProgressStyle="progress-bar--3" /> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* End Progress Bar Area   */}

                {/* Start Feature Area  */}
                <div id="feature" className="service-area bg_color--1 ptb--120">
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
                        <div className="row service-main-wrapper">
                            {/* Start Single Feature  */}
                            {featureList.map((value, i) => (
                                <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12" key={i}>
                                    <div className="service service__style--2 text-left">
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
                    {/* <div id="chat" className="chat ml-5">
                <Widget    handleNewUserMessage={this.handleNewUserMessage} />
                </div> */}
                </div>
                {/* End Feature Area  */}

                {/* Start Brand Area */}
                {/* <div className="rn-brand-area pb--120 bg_color--10">
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
                </div> */}
                {/* End Brand Area */}
       
                {/* Start Footer Area  */}
                <FooterTwo />
                {/* End Footer Area  */}
                {/* Start Back To Top */}
                <div className="backto-top">
                {/* <div className="row mt-5">
                    <div className="col-md-12">
                    <div id="chat" className="chat ml-5">
                <Widget    handleNewUserMessage={this.handleNewUserMessage} />
                </div>
                    </div>

                </div> */}
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