import React, { Component } from 'react';

import './topbar.css';

import OCIcon from '../oc_icon/ocicon';

export default class TopBar extends Component 
{
    render()
    {
        return (
            <div className="TopBar">
                <header className="TopBar-Header">
                    <OCIcon glow={true} clickable={true}> </OCIcon>
                </header>
            </div>
        );
    }
}