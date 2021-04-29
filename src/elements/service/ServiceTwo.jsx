import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp, FiMail, FiCopy } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Business Stratagy',
        description: 'Have an idea? Let us scale it for you. From start to market, we will have a plan ready to ensure success.'
    },
    {
        icon: <FiLayers />,
        title: 'Website Development',
        description: 'We write clean code and test cases to ensure optimum performance. We meet deadlines with quality work.'
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Reporting',
        description: 'Marketing campaigns ensure your app or website has the reach it deserves. Growing monthly and to the moon!'
    },
    {
        icon: <FiMonitor />,
        title: 'Mobile Development',
        description: 'We provide engineers and curated plans to launch any IOS or Android Apps to Google or Apple app store.'
    },
    {
        icon: <FiMail />,
        title: 'Email Marketing',
        description: 'With Artificial Intelligence, email campaigns are seamless and ensure engaged users and real-time analytics.'
    },
    {
        icon: <FiCopy />,
        title: 'Copywriting',
        description: 'Let our writers tell the story. Ensure your integrity and pay attention to detail that is often overlooked.'
    },
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services provided for you.',
        description = 'You have a problem? Our engineers are standing by ready to lend a helping hand.',
        subtitle= 'What we can do';
        return(
            <React.Fragment>
                <div className="container bg-">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">{subtitle}</span>
                                <br></br>
                                <h2 className="title theme-gradient">{title}</h2>
                                <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-12 mt--30">
                            <div className="row service-main-wrapper">
                                {ServiceList.map( (val , i) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                        {/* <a href="/service-details"> */}
                                        <a href="/">
                                            <div className="service service__style--2 text-left">
                                                <div className="icon">
                                                    {val.icon}
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">{val.title}</h3>
                                                    <p>{val.description}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
