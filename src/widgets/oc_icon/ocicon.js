import React, { Component } from 'react';

import OCIconImgBlack from './img/oc_black.png';
import OCIconImgWhite from './img/oc_white.png';

import './ocicon.css';

export default class OCIcon extends Component 
{
    constructor(props)
    {
        super(props);
        this.props = props;
    }

    props = {
        glow : false,
        clickable : false,
    };

    componentDidMount(){}
    componentWillUnmount(){}

    render() 
    {
        return (
            <div onClick={this.props.clickable ? this.props.whenClick : null}
                className={ `OCIcon ${this.props.glow  ? "OCIconGlow" : "" } ${this.props.clickable ? "OCIconClickable" : ""}` }
                >
                <img className="OCIconLight" src={OCIconImgWhite} alt="OttCon"></img>
                <img className="OCIconDark" src={OCIconImgBlack} alt="OttCon"></img>
            </div>
        );
    }
}