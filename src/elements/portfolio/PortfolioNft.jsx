import React, { Component } from "react";
import { Link } from 'react-router-dom';
const Portfolio_image = <img src="/assets/images/portfolio/a1.jpeg" alt="AI Nomads" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/a2.jpeg" alt="AI Nomads" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/a5.jpeg" alt="AI Nomads" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/a4.jpeg" alt="AI Nomads" />;
const nftOne = <img src="https://lh3.googleusercontent.com/y-UfKR9MD2oUg-03b_Iyy776XYBIJ2B1xvSBdmM7xgPSKLGSUnyEZcGWoxNgrRRAxHLamARRBE72sSo9rj0eWErI4oISX_rOcVurYw=s288" alt="nftOne" />
const nftTwo = <img src="https://lh3.googleusercontent.com/25j1GWiDKy2mIUDTR0I8gFQ5MMLdavX6c2xNzyrsVRGAwZSTAxBVvuQa4rmpMY9Pj-q0FERSB-98pC7Hypa5N7HssQj-pU21Hp5wsQ=s0" alt="nftOne" />
const nftThree = <img src="https://lh3.googleusercontent.com/qQYxNk_mleTWBHUxGVpI5IJ44dUXsPrGfN6G60uvIEl-5ppzmaiPlCKysw24y4RgcI0mIPz2A_i16A50JNHLRdFPk5zE9dvpUd_pEA=s330" alt="nftOne" />
const nftFour = <img src="https://lh3.googleusercontent.com/bLN6QrBgIX6KKN3Vl6UECy74gFewZWCW-lsrk-u_i6FxMMsYOZfk8bvAxe92hNW8xJC5oDkeAhkZ8PreveF009wcPoVUx3mVnc4-7w=s330" alt="nftOne" />
const nftFive = <img src="https://lh3.googleusercontent.com/ezjtPMA8wdLzgfav6ASXOs3XJgYS5wFezrw4tJluUfPwqZVJQA9C2MHnUQ8RMvsXqBD72E6IDo1LP4t8Xt31MkiaMO031yFjP3NOwPo=s330" alt="nftOne" />
const nftSix = <img src="https://lh3.googleusercontent.com/aUfxieyasvO-rPU53UDLpjFCQmXYS3slmrhYpwP8MQxnbxqL2r2yjO1t4HiXtL-fa6_ZiMGDF5x9DpLbedHg8aUwiwbhR8prQkOuuA=s330" alt="nftOne" />
const nftSeven = <img src="https://lh3.googleusercontent.com/mSb3HQZOYCjd_hcXvMWsIpdYkHZkUZb4oeNzG2U8d8dyGQbe58MjaXmZTPGbxRTNgPOrPrmVW80F6HpN7zVxRvJPf4WxChu0-14W6g=s330" alt="nftOne" />
const nftEight = <img src="https://lh3.googleusercontent.com/DKoOvu2gdB9oWpc6tWHjXGPOIiX5J7CostgVvk4S06SYcZvbLW8J-SBkDy1Wgh3h50PdkOOCIgClT9qbmmdHD9Y_oXzWa0EKXdOT=s330" alt="nftOne" />
const nftNine = <img src="https://lh3.googleusercontent.com/y-UfKR9MD2oUg-03b_Iyy776XYBIJ2B1xvSBdmM7xgPSKLGSUnyEZcGWoxNgrRRAxHLamARRBE72sSo9rj0eWErI4oISX_rOcVurYw=s288" alt="nftOne" />
const nftTen = <img src="https://lh3.googleusercontent.com/y-UfKR9MD2oUg-03b_Iyy776XYBIJ2B1xvSBdmM7xgPSKLGSUnyEZcGWoxNgrRRAxHLamARRBE72sSo9rj0eWErI4oISX_rOcVurYw=s288" alt="nftOne" />
const nftEleve = <img src="https://lh3.googleusercontent.com/y-UfKR9MD2oUg-03b_Iyy776XYBIJ2B1xvSBdmM7xgPSKLGSUnyEZcGWoxNgrRRAxHLamARRBE72sSo9rj0eWErI4oISX_rOcVurYw=s288" alt="nftOne" />
const Portfolio_image5 = <img src="/assets/images/portfolio/portfolio-static-05.jpg" alt="React Creative Agency" />;
const Portfolio_image6 = <img src="/assets/images/portfolio/portfolio-static-06.jpg" alt="React Creative Agency" />;
const Portfolio_image7 = <img src="/assets/images/portfolio/portfolio-static-07.jpg" alt="React Creative Agency" />;
const Portfolio_image8 = <img src="/assets/images/portfolio/portfolio-static-08.jpg" alt="React Creative Agency" />;
const Portfolio_image9 = <img src="/assets/images/portfolio/portfolio-static-09.jpg" alt="React Creative Agency" />;
const Portfolio_image10 = <img src="/assets/images/portfolio/portfolio-static-01.jpg" alt="React Creative Agency" />;
const Portfolio_image11 = <img src="/assets/images/portfolio/portfolio-static-08.jpg" alt="React Creative Agency" />;
const Portfolio_image12 = <img src="/assets/images/portfolio/portfolio-static-05.jpg" alt="React Creative Agency" />;



const topRated = [
    {
        // image: Portfolio_image,
        image: nftOne,
        price: '25555500',
        coin: 'ETH',
        category: 'NomadToms',
        title: 'NomadTom #1',
        description: 'Building a bridge between one’s dreams and web development.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    },
    {
        // image: Portfolio_image2,
        image: nftTwo,
        price: '698',
        coin: 'ETH',
        category: 'NomadToms',
        title: 'NomadTom #2',
        description: 'IOS and Android App development.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    },
    {
        // image: Portfolio_image3,
        image: nftThree,
        price: '3000',
        coin: 'ETH',
        category: 'NomadToms',
        title: 'NomadTom #3',
        description: 'Extensive research and impeccable User Interfaces.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    },
    {
        image: nftFour,
        // image: Portfolio_image4,
        price: '400000000',
        coin: 'ETH',
        category: 'NomadToms',
        title: 'NomadTom #4',
        description: 'Graphic Designers ready to bring your ideas to life.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    }
    // ,
    // {
    //     image: nftFive,
    //     category: 'Application',
    //     title: 'Photoshop Design',
    //     description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    // },
    // {
    //     image: nftSix,
    //     category: 'Application',
    //     title: 'Photoshop Design',
    //     description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    // }
    // {
    //     image: Portfolio_image7,
    //     category: 'Application',
    //     title: 'Photoshop Design',
    //     description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    // },
    // {
    //     image: Portfolio_image8,
    //     category: 'Application',
    //     title: 'Photoshop Design',
    //     description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    // },
    // {
    //     image: Portfolio_image9,
    //     category: 'Application',
    //     title: 'Photoshop Design',
    //     description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    // },
    // {
    //     image: Portfolio_image10,
    //     category: 'Application',
    //     title: 'Photoshop Design',
    //     description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    // },
    // {
    //     image: Portfolio_image11,
    //     category: 'Application',
    //     title: 'Photoshop Design',
    //     description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    // },
    // {
    //     image: Portfolio_image12,
    //     category: 'Application',
    //     title: 'Photoshop Design',
    //     description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    // },
]

const newCollections = [
    {
        image: nftFive,
        price: '1',
        coin: 'ETH',
        category: 'NomadToms',
        title: 'NomadTom #4',
        description: 'Graphic Designers ready to bring your ideas to life.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    },
    {
        image: nftSix,
        price: '4',
        coin: 'ETH',
        category: 'NomadToms',
        title: 'NomadTom #4',
        description: 'Graphic Designers ready to bring your ideas to life.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    },
    {
        image: nftSeven,
        price: '13',
        coin: 'ETH',
        category: 'NomadToms',
        title: 'NomadTom #4',
        description: 'Graphic Designers ready to bring your ideas to life.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    },
    {
        image: nftEight,
        price: '12',
        coin: 'ETH',
        category: 'NomadToms',
        title: 'NomadTom #4',
        description: 'Graphic Designers ready to bring your ideas to life.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    }
]

const digitalArt = [
    {
        image: nftFive,
        price: '21',
        coin: 'ETH',
        category: 'NomadToms',
        title: 'NomadTom #4',
        description: 'Graphic Designers ready to bring your ideas to life.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    },
    {
        image: nftSix,
        price: '22',
        coin: 'ETH',
        category: 'NomadToms',
        title: 'NomadTom #4',
        description: 'Graphic Designers ready to bring your ideas to life.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    },
    {
        image: nftSeven,
        price: '23',
        coin: 'ETH',
        category: 'NomadToms',
        title: 'NomadTom #4',
        description: 'Graphic Designers ready to bring your ideas to life.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    },
    {
        image: nftEight,
        price: '4658',
        coin: 'ETH',
        category: 'NomadToms',
        title: 'NomadTom #4',
        description: 'Graphic Designers ready to bring your ideas to life.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    }
]

const cryptoScripture = [
    {
        image: nftFive,
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: nftSix,
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image7,
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    },
    {
        image: Portfolio_image8,
        category: 'Application',
        title: 'Photoshop Design',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    }
]

class PortfolioNft extends Component {
    buyNftFromOwner(id, tipAmount) {
        console.log('User is attempting to buy NFT :');
        console.table(id, tipAmount);
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

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            nft: true
        }


        this.buyNftFromOwner = this.buyNftFromOwner.bind(this)
    }

    render() {
        console.log('THESE ARE THE PROPS : ', this.props)
        if (this.props.category == "topRated") {
            const { column } = this.props;
            const list = topRated.slice(0, this.props.item);
            return (
                <React.Fragment>
                    {list.map((value, index) => (
                        <div className={`${column}`} key={index}>
                            <div className="im_portfolio">
                                <div className="thumbnail_inner">
                                    <div className="thumbnail">
                                        <Link to="#">
                                            {value.image}
                                        </Link>
                                        {/* <Link to="/portfolio-details">
                                        {value.image}
                                    </Link>     */}
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <div className="portfolio_heading">
                                            <div className="category_list">
                                                <Link to="/#">{value.category}</Link>
                                                {/* <Link to="/portfolio-details">{value.category}</Link> */}
                                            </div>
                                            <h4 className="title"><Link to="/#">{value.title}</Link></h4>
                                            <p className="text-white">Current Bid: <span className="theme-gradient">{window.web3.utils.fromWei(value.price.toString(), 'Ether')} ETH</span></p>
                                            {/* <h4 className="title"><Link to="/portfolio-details">{value.title}</Link></h4> */}
                                        </div>
                                        <div className="portfolio_hover">

                                            <p className="contractAddress">Contract Address: {value.contractAddress}</p>

                                        </div>
                                    </div>
                                </div>
                                <Link className="transparent_link" to="/#"></Link>
                                {/* <Link className="transparent_link" to="/portfolio-details"></Link> */}
                            </div>
                        </div>
                    ))}

                </React.Fragment>
            )
        } else if (this.props.category == "NewCollections") {
            const { column } = this.props;
            const list = newCollections.slice(0, this.props.item);
            return (
                <React.Fragment>
                    {list.map((value, index) => (
                        <div className={`${column}`} key={index}>
                            <div className="im_portfolio">
                                <div className="thumbnail_inner">
                                    <div className="thumbnail">
                                        <Link to="#">
                                            {value.image}
                                        </Link>
                                        {/* <Link to="/portfolio-details">
                                        {value.image}
                                    </Link>     */}
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <div className="portfolio_heading">
                                            <div className="category_list">
                                                <Link to="/#">{value.category}</Link>
                                                {/* <Link to="/portfolio-details">{value.category}</Link> */}
                                            </div>
                                            <h4 className="title"><Link to="/#">{value.title}</Link></h4>
                                                <p className="text-white">Current Bid: <span className="theme-gradient" onClick={(event) => {
                                                let tipAmount = window.web3.utils.toWei('2', 'Ether')

                                                this.buyNftFromOwner('skdhjhsfk')
                                            }} name={this.props.nft.id} >{window.web3.utils.fromWei(value.price.toString(), 'Ether')} ETHHHHH</span></p>
                                            {/* <h4 className="title"><Link to="/portfolio-details">{value.title}</Link></h4> */}
                                        </div>
                                        <div className="portfolio_hover">

                                            <p className="contractAddress">Contract Address: {value.contractAddress}</p>

                                        </div>
                                    </div>
                                </div>
                                <Link className="transparent_link" to="/#"></Link>
                                {/* <Link className="transparent_link" to="/portfolio-details"></Link> */}
                            </div>
                        </div>
                    ))
                    }

                </React.Fragment >
            )
        }
        else if (this.props.catergory == "digitalArt") {
            const { column } = this.props;
            const list = digitalArt.slice(0, this.props.item);
            return (
                <React.Fragment>
                    {list.map((value, index) => (
                        <div className={`${column}`} key={index}>
                            <div className="im_portfolio">
                                <div className="thumbnail_inner">
                                    <div className="thumbnail">
                                        <Link to="#">
                                            {value.image}
                                        </Link>
                                        {/* <Link to="/portfolio-details">
                                        {value.image}
                                    </Link>     */}
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <div className="portfolio_heading">
                                            <div className="category_list">
                                                <Link to="/#">{value.category}</Link>
                                                {/* <Link to="/portfolio-details">{value.category}</Link> */}
                                            </div>
                                            <h4 className="title"><Link to="/#">{value.title}</Link></h4>
                                            <p className="text-white">Current Bid: <span className="theme-gradient">{window.web3.utils.fromWei(value.price.toString(), 'Ether')} ETH</span></p>
                                            {/* <h4 className="title"><Link to="/portfolio-details">{value.title}</Link></h4> */}
                                        </div>
                                        <div className="portfolio_hover">

                                            <p className="contractAddress">Contract Address: {value.contractAddress}</p>

                                        </div>
                                    </div>
                                </div>
                                <Link className="transparent_link" to="/#"></Link>
                                {/* <Link className="transparent_link" to="/portfolio-details"></Link> */}
                            </div>
                        </div>
                    ))}

                </React.Fragment>
            )
        }

        else {
            const { column } = this.props;
            const list = digitalArt.slice(0, this.props.item);
            return (
                <React.Fragment>
                    {list.map((value, index) => (
                        <div className={`${column}`} key={index}>
                            <div className="im_portfolio">
                                <div className="thumbnail_inner">
                                    <div className="thumbnail">
                                        <Link to="#">
                                            {value.image}
                                        </Link>
                                        {/* <Link to="/portfolio-details">
                                        {value.image}
                                    </Link>     */}
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <div className="portfolio_heading">
                                            <div className="category_list">
                                                <Link to="/#">{value.category}</Link>
                                                {/* <Link to="/portfolio-details">{value.category}</Link> */}
                                            </div>
                                            <h4 className="title"><Link to="/#">{value.title}</Link></h4>
                                            <p className="text-white">Current Bid: <span className="theme-gradient">{window.web3.utils.fromWei(value.price.toString(), 'Ether')} ETH</span></p>
                                            {/* <h4 className="title"><Link to="/portfolio-details">{value.title}</Link></h4> */}
                                        </div>
                                        <div className="portfolio_hover">

                                            <p className="contractAddress">Contract Address: {value.contractAddress}</p>

                                        </div>
                                    </div>
                                </div>
                                <Link className="transparent_link" to="/#"></Link>
                                {/* <Link className="transparent_link" to="/portfolio-details"></Link> */}
                            </div>
                        </div>
                    ))}

                </React.Fragment>
            )
        }

    }
}
export default PortfolioNft;