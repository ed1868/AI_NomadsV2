import React, { Component } from "react";
import { Link } from 'react-router-dom';
const Portfolio_image = <img src="/assets/images/portfolio/a1.jpeg" alt="AI Nomads" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/a2.jpeg" alt="AI Nomads" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/a5.jpeg" alt="AI Nomads" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/a4.jpeg" alt="AI Nomads" />;
// const Portfolio_image5 = <img src="/assets/images/portfolio/portfolio-static-05.jpg" alt="React Creative Agency" />;
// const Portfolio_image6 = <img src="/assets/images/portfolio/portfolio-static-06.jpg" alt="React Creative Agency" />;
// const Portfolio_image7 = <img src="/assets/images/portfolio/portfolio-static-07.jpg" alt="React Creative Agency" />;
// const Portfolio_image8 = <img src="/assets/images/portfolio/portfolio-static-08.jpg" alt="React Creative Agency" />;
// const Portfolio_image9 = <img src="/assets/images/portfolio/portfolio-static-09.jpg" alt="React Creative Agency" />;
// const Portfolio_image10 = <img src="/assets/images/portfolio/portfolio-static-01.jpg" alt="React Creative Agency" />;
// const Portfolio_image11 = <img src="/assets/images/portfolio/portfolio-static-08.jpg" alt="React Creative Agency" />;
// const Portfolio_image12 = <img src="/assets/images/portfolio/portfolio-static-05.jpg" alt="React Creative Agency" />;



const PortfolioList = [
    {
        image: Portfolio_image,
        price:'1.05',
        coin:'ETH',
        category: 'NomadToms',
        title: 'NomadTom #1',
        description: 'Building a bridge between one’s dreams and web development.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    },
    {
        image: Portfolio_image2,
        price:'0.05',
        coin:'ETH',
        category: 'NomadToms',
        title: 'NomadTom #2',
        description: 'IOS and Android App development.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    },
    {
        image: Portfolio_image3,
        price:'3.00',
        coin:'ETH',
        category: 'NomadToms',
        title: 'NomadTom #3',
        description: 'Extensive research and impeccable User Interfaces.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    },
    {
        image: Portfolio_image4,
        price:'23.05',
        coin:'ETH',
        category: 'NomadToms',
        title: 'NomadTom #4',
        description: 'Graphic Designers ready to bring your ideas to life.',
        contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e"
    }
    // {
    //     image: Portfolio_image5,
    //     category: 'Application',
    //     title: 'Photoshop Design',
    //     description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    // },
    // {
    //     image: Portfolio_image6,
    //     category: 'Application',
    //     title: 'Photoshop Design',
    //     description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'
    // },
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


class PortfolioNft extends Component{
    render(){
        const {column } = this.props;
        const list = PortfolioList.slice(0 , this.props.item);
        return(
            <React.Fragment>
                {list.map((value , index) => (
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
                                        <p className="text-white">Current Bid: <span className="theme-gradient">{value.price} {value.coin}</span></p>
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
export default PortfolioNft;