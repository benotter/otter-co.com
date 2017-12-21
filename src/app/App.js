import React, { Component } from 'react';

import OCIcon from '../widgets/oc_icon/ocicon';
import TopBar from '../widgets/topbar/topbar';

import ContentBlock from '../widgets/content_block/contentBlock';
import AppList from '../widgets/app_list/app_list';
import AppContainer from '../widgets/app_container/app_container';

import subApps from '../dev_data/subApps';

import './app.css';

let alreadySet = false;

class App extends Component
{
	constructor ( props )
	{
		super( props );

		this.state = {
			subApps: [],
		};
	}

	componentWillMount ()
	{
		if ( !alreadySet )
		{
			this.setState( { subApps } );
			alreadySet = false;
		}

	}
	componentDidMount () { }
	componentWillUnmount () { }

	render ()
	{
		return (
			<div className="App">
				<TopBar>

					<OCIcon
						glow={ true }
						clickable={ true }
						whenClick={ () => { this.toggleAppList(); } }
					>

					</OCIcon>

				</TopBar>

				<ContentBlock>

					<AppList
						ref={ ( ref ) => { this.appList = ref; } }
						appSetter={ ( app ) => { this.setCurrentApp( app ); } }
						apps={ this.state.subApps } 
					>

					</AppList>

					<AppContainer 
						ref={ ( ref ) => { this.appCont = ref; } }
					>
					
					</AppContainer>

				</ContentBlock>
			</div>
		);
	}

	toggleAppList ()
	{
		this.appList.toggleOpen();
	}

	setCurrentApp ( app )
	{
		this.appCont.setCurrentApp( app );
	}

}

export default App;
