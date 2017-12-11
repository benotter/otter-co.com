import React, { Component } from 'react';

import OCIconImgBlack from './img/oc_black.png';
import OCIconImgWhite from './img/oc_white.png';

import './ocicon.css';

export default class OCIcon extends Component 
{
    props = {
        glow : false,
        clickable : false,
    };

    constructor(props)
    {
        super(props);
        this.props = props;
    }

    render() 
    {
        return (
            <div className={ `OCIcon ${this.props.glow  ? "OCIconGlow" : "" } ${this.props.clickable ? "OCIconClickable" : ""}` }>
                <img className="OCIconLight" src={OCIconImgWhite} alt="OttCon"></img>
                <img className="OCIconDark" src={OCIconImgBlack} alt="OttCon"></img>
            </div>
        );
    }
}