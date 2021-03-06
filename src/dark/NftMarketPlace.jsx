import React, { Component, Fragment, useEffect } from "react";
import CryptoScripture from '../abis/CryptoScripture.json'
import NomadNft from '../abis/NomadNft.json';
import ScrollToTop from 'react-scroll-up';
import PortfolioNft from "../elements/portfolio/PortfolioNft";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ProgressOne from "../blocks/progressbar/ProgressOne";
import ProgressTwo from "../blocks/progressbar/ProgressTwo";
import ServiceTwo from "../elements/service/ServiceTwo";
import Particles from 'react-particles-js';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import { Widget } from 'react-chat-widget';
import Web3 from 'web3';


import 'react-chat-widget/lib/styles.css';


import {
    FaReact,
    FaSass,
    FaFootballBall,
    FaInstagram,
    FaGamepad
} from "react-icons/fa";

import {
    FiSmartphone,
    FiCode,
    FiDownload,
    FiCommand,
    FiHeadphones,
    FiBold,
    FiChevronUp,
    FiMusic,
    FiBookOpen,
    FiPenTool,
    FiWifi,
    FiTwitch,
} from "react-icons/fi";





const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: `Nomad NFT's`,
        description: 'Take control of your digital content. Use NFT(non-fungible-tokens) to display, sell and trade your art, music and more.',
        descriptionTwo: 'On Your Terms',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

const featureList = [

    {
        icon: <FiPenTool />,
        title: 'Digital Art',
        subtitle: 'Sell or Buy Digital Art. Get paid to be as creative as you can be. '
    },
    {
        icon: <FiBookOpen />,
        title: 'Literature',
        subtitle: `Poems, Books and Screenplay can now be NFT's. This gives a whole new meaning to author editions and authenticity.`
    },
    {
        icon: <FiMusic />,
        title: 'Music',
        subtitle: 'Artist are now able to be their own record label. NFT songs and albums can cut out the music industries middle man and give ultimate power to the artist over their work. Blockchain also gives total transparancy to see who is really hot or not. Popularity can not be bought, only earned.'
    },
    {
        icon: <FaFootballBall />,
        title: 'Sports',
        subtitle: `Sports cards are now available as NFT's. Trade your most vaulable cards or create a whole set of cards for users to buy.`
    },
    {
        icon: <FaInstagram />,
        title: 'Social Media',
        subtitle: `Give a new meaning to your data. Redefine every social media post to be bought, tipped and certified by Ethereum Blockchain.`
    },
    {
        icon: <FiCommand />,
        title: 'Smart Contracts',
        subtitle: `With Smart Contracts you can define the terms of your NFT's. Royalties, subscriptions and other features will be rolled out and backed by Chainlink Smart Contracts.`
    },
    {
        icon: <FiWifi />,
        title: 'Domains',
        subtitle: 'Ethereum is a whole new space for people to share, create and publish DAPPS. Each one needs a domain. You can buy, sell or trade Domains.'
    },
    {
        icon: <FaGamepad />,
        title: 'Gaming',
        subtitle: `Build a DAPP game? Use NFT's to create a whole user experience where skins, game songs and packages are only the tip of the iceberg.`
    }
]

const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'Download CryptoWallet',
        description: 'There are many crypto wallets that let you operate Ethereum based Dapps. Our favorite one is Metamask. '
    },
    {
        icon: <FiCast />,
        title: 'Browse Marketplace',
        description: 'Explore our array of collections of digital art. Filter by catagories and discover new art from our +1000 creators.'
    },
    {
        icon: <FiMap />,
        title: `Create, Sell or Buy NFT's`,
        description: 'Create a collection of your digital art, launch it for the world to see!'
    },
]


class NftMarketPlace extends Component {

    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider downloading and connecting a hardwallet like Metamask!');
            this.setState({ preview: true });
            this.setState({ loading: false });
        }
    }


    async loadBlockchainData() {
        const web3 = window.web3
        if (web3 == undefined) {
            this.setState({ preview: true });
            this.setState({ loading: false });
            return;
        }

        this.setState({ preview: false })
        // Load account
        const accounts = await web3.eth.getAccounts()

        console.log(`THESE ARE THE ACCOUNTS : ${accounts}`);
        this.setState({ account: accounts[0] })
        // Network ID
        const networkId = await web3.eth.net.getId()
        const networkData = NomadNft.networks[networkId]
        console.log('NETWORK DATA : ', networkData);
        if (networkData) {
            const nomadNft = new web3.eth.Contract(NomadNft.abi, networkData.address)
            this.setState({ nomadNft })
            const nomadNftcount = await nomadNft.methods.nomadNftcount().call()
            this.setState({ nomadNftcount })
            // Load scriptures
            for (var i = 1; i <= nomadNftcount; i++) {
                const nft = await nomadNft.methods.nfts(i).call()
                console.log('THIS IS THE SINGLE NFT DATA : ', nft);
                this.setState({
                    nfts: [...this.state.nfts, nft]
                })
            }


            // Sort scriptures. Show highest tipped scriptures first
            // this.setState({
            //     scriptures: this.state.scriptures.sort((a, b) => b.tipAmount - a.tipAmount)
            // })
            // this.setState({ loading: false })

        } else {
            window.alert(' AI Nomads contract not deployed to detected Blockchain network.');
        }


        // SET Top 5 SCRIPTURES
        // if (this.state.scriptures) {
        //     this.setState({
        //         top5scriptures: this.state.scriptures.slice(0, 5)
        //     });
        // }


    }



    buyNftFromOwner(id, tipAmount) {
        console.log('User is attempting to buy NFT :');
        // <strong>Price: {window.web3.utils.fromWei(props.scriptures.tipAmount.toString(), 'Ether')} ETH</strong>




        //         <button
        //         className="btn btn-link btn-sm float-right pt-0"
        //         name={props.scriptures.id}
        //         onClick={(event) => {

        //             let tipAmount = window.web3.utils.toWei('1', 'Ether')
        //             console.log(event.target.name, tipAmount)
        //             props.tipImageOwner(event.target.name, tipAmount)
        //         }}
        //     >
        //         TIP 0.1 ETH
        // </button>




        // console.log(`USER ID : ${id}`);
        // console.log(`Tip amount : ${tipAmount}`);
        // this.setState({ loading: true })
        // this.state.cryptoScripture.methods.tipScriptureOwner(id).send({ from: this.state.account, value: tipAmount }).on('transactionHash', (hash) => {
        //   this.setState({ loading: false });
        // })
        //   .then(err => {
        //     if (err) {
        //       console.log('THE ERROR IS : ', err);
        //     }

        //     window.location.reload(true);
        //   })

    }


    constructor() {
        super()
        this.state = {
            isOpen: false,
            nft: true,
            preview: true
        }
        this.openModal = this.openModal.bind(this)

        this.buyNftFromOwner = this.buyNftFromOwner.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }


    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
    }
    render() {
        let preview = this.state.preview;
        console.log('the fucking preview: ', preview)
        return (
            <div className="active-dark bg_color--10">
                <Helmet pageTitle="Nomad NFT Marketplace" />

                {/* Start Header Area  */}
                <Header account={this.state.account} />
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
                    <div className="im_modern_slider bg_image bg_image--6 ">
                        {SlideList.map((value, index) => (
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                {value.description ? <p className="text-white pt-5">{value.description}</p> : ''}
                                                {value.descriptionTwo ? <p className="text-white theme-gradient ">{value.descriptionTwo}</p> : ''}
                                                {/* {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-large" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''} */}
                                                {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-large" href="#nftMarketPlace">Explore</a></div> : ''}
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
                    <div className="row pt-3">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--30">
                                <span className="subtitle">Create, Sell or Buy Safely through Blockchain</span>
                                <br></br>
                                <h2 className="title theme-gradient">Be part of the expanding blockchain ecosystem</h2>

                            </div>
                        </div>
                    </div>
                    <div className="row row--25 pt-5">
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
                        <div id="nftMarketPlace" className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2 className="title theme-gradient">Explore Our Digital Art</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper plr--30">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <p className="theme-gradient text-left">Top Rated</p>
                            </div>
                            <PortfolioNft item="8" column="col-lg-3 col-md-6 col-sm-6 col-12 portfolio-tilthover" nft={this.state.nft} category={"topRated"} buyNftFromOwner={this.buyNftFromOwner} previewMode={this.state.preview} />
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                                <p className="theme-gradient text-left">New Collections</p>
                            </div>
                            <PortfolioNft item="8" column="col-lg-3 col-md-6 col-sm-6 col-12 portfolio-tilthover" nft={this.state.nft} category={"NewCollections"} buyNftFromOwner={this.buyNftFromOwner} previewMode={this.state.preview} />
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                                <p className="theme-gradient text-left">Digital Art</p>
                            </div>
                            <PortfolioNft item="8" column="col-lg-3 col-md-6 col-sm-6 col-12 portfolio-tilthover" nft={this.state.nft} category={"topRated"} buyNftFromOwner={this.buyNftFromOwner} previewMode={this.state.preview} />
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                                <p className="theme-gradient text-left">Crypto Scriptures</p>
                            </div>
                            <PortfolioNft item="8" column="col-lg-3 col-md-6 col-sm-6 col-12 portfolio-tilthover" nft={this.state.nft} category={"digitalArt"} buyNftFromOwner={this.buyNftFromOwner} previewMode={this.state.preview} />
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

                {/* <div className="service-area pb--120 bg_color--10">
                    <div className="container">
                        <ServiceTwo />
                    </div>
                </div> */}

                {/* Start Progress Bar Area   */}
                {/* <div className="rn-progress-area pb--120 bg_color--10">
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
                                    <ProgressOne ProgressStyle="progress-bar--3" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Progress Bar Area   */}

                {/* Start Feature Area  */}
                <div id="feature" className="service-area bg_color--1 ptb--120">
                    <div className="wrapper plr--120">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center pb--30">
                                    <span className="subtitle">Intelligent Magic</span>
                                    <br></br>
                                    <h2 className="title theme-gradient">How NFT's Can Benefit You</h2>
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
export default NftMarketPlace;