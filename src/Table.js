import React, {Component} from 'react';
import usersJSON from './usersJSON';
import Age from './Age';
import Name from './Name';
import Points from './Points';
import Rank from './Rank';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}

		//this.compareByAge = this.compareByAge.bind(this);
	}

	

	// componentWillReceiveProps() {
		
	// }

    // complete the comparators
	compareByAge = (a,b) => {
		if(a['age']>b['age']) return 1;
		else if (a['age']<b['age']) return -1;
		else return 0;
		
		
	}

	compareByName = (a, b) => {
		if(a['name']>b['name']) return 1;
		else if (a['name']<b['name']) return -1;
		else return 0;
	}

	compareByPoints = (a, b) => {
		if(a['points']>b['points']) return 1;
		else if (a['points']<b['points']) return -1;
		else return 0;
	}

	compareByRank = (a, b) => {
		if(a['rank']>b['rank']) return 1;
		else if (a['rank']<b['rank']) return -1;
		else return 0;
	}

	sort = (key) =>{

		var comparator = null;

		switch(key){
			case 'rank': comparator = this.compareByRank;break;
			case 'name': comparator = this.compareByName;break;
			case 'points': comparator = this.compareByPoints;break;
			case 'age': comparator = this.compareByAge;break;
			default:
		}

		
		
		var sortedList = this.state.users.sort(comparator);
		this.setState(
			{list : sortedList}
		)
	}
	render() {
 
		return (<div>
			<table className="table">
				<thead>
					<tr key="head">
						<th><Age onClick={this.sort}></Age></th>
						<th><Name onClick={this.sort}></Name></th>
						<th><Points onClick={this.sort}></Points></th>
						<th><Rank onClick={this.sort}></Rank></th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.users.map(
							item =>{
								return(
									<tr key={item.name}>
										<td>{item.age}</td>
										<td>{item.name}</td>
										<td>{item.points}</td>
										<td>{item.rank}</td>
										
									</tr>
								)
								

							}
						)
					}
				</tbody>
			</table>
		</div>)
	}
}
