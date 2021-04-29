import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressTwo = (props) => {
    return (
        // Start Single Progressbar 
        <div className={`rn-progress-bar ${props.ProgressStyle}`}>
            
            <div className="single-progress custom-color--1">
                <h6 className="title">Artificial Intelligence Intergration</h6>
                <ProgressBar now={98} />
                <span className="label">98%</span>
            </div>

            <div className="single-progress custom-color--2">
                <h6 className="title">Ethereum Blockchain Development</h6>
                <ProgressBar now={95} />
                <span className="label">95%</span>
            </div>

            <div className="single-progress custom-color--3">
                <h6 className="title">App Development</h6>
                <ProgressBar now={93} />
                <span className="label">93%</span>
            </div>

            <div className="single-progress custom-color--4">
                <h6 className="title">Marketing</h6>
                <ProgressBar now={89} />
                <span className="label">89%</span>
            </div>
            <div className="slide-btn mt-5 pt-5"><a className="btn-default btn-large" href="/contact">Contact Us</a> </div>
        </div>
        // {/* // End Progress Bar */}
    )
}

export default ProgressTwo
