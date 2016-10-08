import React from 'react';
import _ from 'underscore';
export default class Searchbox extends React.Component {
	
	constructor() {
		super();
		this.state = {
			data: [{name:"lion skin", age:22},{name:"fish", age:61},{name:"monkey", age:60},{name: "apple", age: 30},{name: "giraf", age: 32}],
			searchFilter:[{name:"stefan", age:22},{name:"fish", age:61},{name:"monkey", age:60},{name: "apple", age: 30},{name: "giraf", age: 32}]
		};
		this.changeHandler = this.changeHandler.bind(this);

	}

	changeHandler() {
		let input = this.refs.myInput;
		let inputValue = input.value;
		let dataValue = this.state.data;
		let newSearchFilter = [];
		dataValue.map(element => {
			let el = element.name.toLowerCase();
			if (el.includes(inputValue)) {
				newSearchFilter.push(element);			
			}
		})
		this.state.searchFilter = newSearchFilter;
		let newState = this.state
		this.setState({newState});

		console.log("--searchFilter--");
		console.log(this.state.searchFilter);

	}

	render() {
		let count = 0;
		let elements = this.state.searchFilter.map(el=> <li key={count++}> {el.name} </li>);
		let inputValue = this.state.value;
		return (
			<div>
			  <h3>Illegal things to buys</h3>
				<input type="text" ref="myInput" onChange={this.changeHandler}/>
				<br/>
				<ol> {elements} </ol>
			</div>
			);
	}
}