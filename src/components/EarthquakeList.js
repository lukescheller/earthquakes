import React, { Component } from 'react';
import moment from 'moment';
import earthquakes from '../data/earthquake'

export default class EarthquakeList extends Component {
	render(){
		let quakenbake = earthquakes.features.map((quaker) => {

			return(

				<div className="col-sm-6" key={quaker.id}>
  				<div className="card">
    			<div className="card-block">
      			<h4 className="card-title">{quaker.properties.place}</h4>
      			<h6 className="card-subtitle mb-2 text-muted">Magnitude: {quaker.properties.mag}</h6>
      			<h6 className="card-subtitle mb-2 text-muted">Time: {moment(quaker.properties.time).format('llll')}</h6>
      			<p className="card-text">Coordinates: {quaker.geometry.coordinates}</p>
      			<a href={quaker.properties.url} className="card-link">USGS Event Link</a>

   			 </div>
  		</div>
	</div>

		)//end first return
	});//end quakenbake

		return(
			<div>
				{quakenbake}
			</div>
		)//end second return
	}//end render
}//end EarthquakeList
