import React, { Component } from 'react';

import './app_list.css';

export default class AppList extends Component 
{
    constructor(props)
    {
        super(props);
        this.props = props;

        this.state = { 
            open: false,
            selectedAppId: null
        };
    }

    render()
    {
        return (
            <div className={`AppList ${this.state.open ? "AppListOpen" : "AppListClosed"}`}>

                <div className="AppList-Cont">

                    {this.props.apps.map((app)=>
                    (
                        <div key={app.id} 
                            onClick={(e)=>{this.setApp(app, this.props.appSetter)}}
                            className={`AppList-App ${this.state.selectedAppId == app.id ? "AppList-Selected" : "" }`} >

                            <div className="AppList-AppIcon"></div>
                            <span className="AppList-AppName">{ app.appInfo.appShortName }</span>
                        </div>
                    ))}

                </div>

            </div>
        );
    }

    toggleOpen()
    {
        this.setState( { open: !this.state.open });
    }

    setApp(app, appSetter)
    {
        this.setState({selectedAppId: app.id});

        if(appSetter)
            appSetter(app);
    }
}

