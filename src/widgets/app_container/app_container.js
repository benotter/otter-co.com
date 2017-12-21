import React, { Component } from 'react';

import './app_container.css';

export default class AppContainer extends Component 
{
    constructor ( props )
    {
        super( props );

        this.state = {
            currentApp: null,
        };

        this.props = props;
    }

    setCurrentApp ( app )
    {
        this.setState( { currentApp: app } );
    }

    render ()
    {
        return (
            <div className="AppContainer">

            </div>
        );
    }
}