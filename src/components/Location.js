import React, { Component } from 'react'
import { Jumbotron, Image } from 'react-bootstrap'

class Location extends Component {
	render() {
		return (<div>
					<Jumbotron className="jumbo-result">
						<h1>{this.props.location}</h1>
						<Image src={this.props.weather.icon} />
					</Jumbotron>
				</div>)
	}
}			

export default Location