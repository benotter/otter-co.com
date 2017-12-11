import React, {Component} from 'react';

import './contentBlock.css';

import AppList from '../app_list/app_list';
import AppContainer from '../app_container/app_container';

export default class ContentBlock extends Component 
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="ContentBlock">
                {this.props.children}
            </div>
        );
    }
}