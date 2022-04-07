import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import config from '../app.config.js';
import ReactGA from 'react-ga';

function NavBar(props) {

	var bStyle = {
		width: '20px'
	}

	const middleStyle = {
		marginLeft: 'auto'
	}

	const rightItemStyle = {
		marginRight: '15px'
	};

	const titleStyle = {
		textDecoration: 'none',
	};

	return (
		<AppBar position="fixed" >
			<Toolbar>
				<MediaQuery minWidth={700}>
					<Typography variant="h6" color="inherit" to="/" component={Link} style={titleStyle}>
						{config.title.main}
					</Typography>
					<div style={bStyle}></div>
				</MediaQuery>

				{config.categories.map( cat => (
					<Button color="inherit" to={cat.path} key={cat.path} component={Link} >{cat.display}</Button>
				))}

				<Button color="inherit" to="/about" component={Link} >About</Button>

				<div style={middleStyle}></div>

				<MediaQuery minWidth={700}>
					<div style={rightItemStyle}></div>
				</MediaQuery>
				<ReactGA.OutboundLink
					to={config.urls.flickr}
					target="_blank" 
					style={rightItemStyle}
					eventLabel="Flickr"
				>
					<img src={require('../images/flickr.png')} width={32} alt="Flickr" />
				</ReactGA.OutboundLink>
				<ReactGA.OutboundLink 
					to={config.urls.instagram} 
					target="_blank"
					eventLabel="Instagram"
				>
					<img src={require('../images/instagram.png')} width={32} alt="Instagram" />
				</ReactGA.OutboundLink>
			</Toolbar>
		</AppBar>
	); 
}

export default NavBar;