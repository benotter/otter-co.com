import React, { Component } from 'react';

import './topbar.css';

import OCIcon from '../oc_icon/ocicon';

export default class TopBar extends Component 
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div className="TopBar">
                <header className="TopBar-Header">
                    {this.props.children}
                </header>
            </div>
        );
    }
}