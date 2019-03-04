import React, { Component } from 'react';
import HeroCard from'../heroCard/heroCard.jsx';


export default class HeroList extends Component {
	render() {
		let heroes = this.props.heroes.map(hero => {
			return <HeroCard key={hero.name} data={hero}/>
		})
		
		return(
			<>
				<h1>Список Героев</h1>
				<div className="row">
					{ heroes }
				</div>

			</>
				)
					
	}
}
