import React, { Component } from 'react';
import styles from './Board.module.css';
import MemberTile from '../../components/Board/MemberTile';
// import axios from 'axios';
import { toast } from 'react-toastify';
import { Route, Link } from 'react-router-dom';
import MemberDetail from './MemberDetail';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Board extends Component {

	componentDidMount() {
		this.props.onLoad()
		  .catch(err => {
		    toast.error(err.toString());
		  });
	}

	render() {
		const members = this.props.members.map(member => {
			return <Link to={'/board/' + member.id} key={member.id}>
								<MemberTile firstName={member.firstName} 
								lastName={member.lastName} 
								title={member.title} />
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

const mapStateToProps = state => {
  return {
    members: state.board.board
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(actions.loadMembersAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
