import React, { Component } from 'react';
import styles from './Board.module.css';
import MemberTile from '../../components/Board/MemberTile';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Route, Link } from 'react-router-dom';
import MemberDetail from './MemberDetail';

class Board extends Component {

	state = {
		members: []
	}

	componentDidMount() {
		console.log(this.props);
		axios.get('/boardmembers')
			.then(resp => {
				this.setState({members: resp.data});
			})
			.catch(err => {
				toast.error(err.toString());
			});
	}

	memberSelectedHandler = (id) => {
		
	}

	render() {
		const members = this.state.members.map(member => {
			return <Link to={'/board/' + member.Id} key={member.id}>
								<MemberTile firstName={member.firstName} 
								lastName={member.lastName} 
								title={member.title} 
								clicked={() => this.memberSelectedHandler(member.Id)}/>
							</Link>
		});

		return (
			<div>
				<p><Link to="/board/add">Add New</Link></p>
				<section className={styles.memberList}>
					{members}
				</section>
				<Route path="/board/:id" component={MemberDetail} />
			</div>
		);
	}
}

export default Board;
