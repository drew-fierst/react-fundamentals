import React, { Component } from 'react';
import styles from './Board.module.css';
import MemberTile from '../../components/Board/MemberTile';
import MemberDetail from './MemberDetail';
import NewMember from './NewMember';
import axios from 'axios';
import { toast } from 'react-toastify';

class Board extends Component {

	state = {
		members: [],
		selectedMemberId: null
	}

	componentDidMount() {
		axios.get('/boardmembers')
			.then(resp => {
				this.setState({members: resp.data});
			})
			.catch(err => {
				toast.error(err.toString());
			});
	}

	memberSelectedHandler = (id) => {
		this.setState({ selectedMemberId: id });
	}

	render() {
		const members = this.state.members.map(member => {
			return <MemberTile firstName={member.firstName} 
								lastName={member.lastName} 
								title={member.title} 
								key={member.id} 
								clicked={() => this.memberSelectedHandler(member.Id)}/>
		});

		return (
			<div>
				<section className={styles.memberList}>
					{members}
				</section>
				<section>
					<MemberDetail id={this.state.selectedMemberId} />
				</section>
				<section>
					<NewMember />
				</section>
			</div>
		);
	}
}

export default Board;
