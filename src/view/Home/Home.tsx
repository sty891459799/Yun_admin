
// import { Route, Redirect } from 'react-router-dom';
import Api from '../../utils/http/Api';
import * as React from 'react';
type state = {
	userName: string;
}
class Home extends React.Component<any, state> {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
		}
	}
	componentDidMount() {
		Api.home().then(res => {
			this.setState({
				userName: res.data.name
			})
		}).catch(error => {
			console.log(error);
		})
	}
	render() {
		return (<div>{this.state.userName}21321321211A</div>)
	}
}
export default Home;
