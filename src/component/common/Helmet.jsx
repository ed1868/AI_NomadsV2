import PropTypes from "prop-types";
import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        if(this.props.pageTitle == "Home Portfolio"){
           console.log('LAUNCHING NOMAD AGENT...');

           return(
            <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Home || AI Nomads  </title>
                <meta name="robots" content="noindex, follow" />
                <meta name="description" content="AI Nomads - a Company that uses Artificial Intelligence to help solve business problems in every sector." />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Helmet>
        </React.Fragment>
           )
        }
        return(
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.pageTitle} || AI Nomads  </title>
                    <meta name="robots" content="noindex, follow" />
                    <meta name="description" content="AI Nomads - a Company that uses Artificial Intelligence to help solve business problems in every sector." />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                </Helmet>
            </React.Fragment>
        )
    }
}
PageHelmet.propTypes = {
    title: PropTypes.string
};
export default PageHelmet;
