import React, { Component } from 'react';
import styles from './Board.module.css';
import MemberTile from '../../components/Board/MemberTile';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Backdrop from '../../components/Modal/Backdrop';
import MemberDetail from '../../components/Board/MemberDetail';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
// import { Transition } from 'react-transition-group';

class Board extends Component {

	state = {
		modalIsOpen: false,
		selectedMember: null
	}

	hideModal = () => {
		this.setState({modalIsOpen: false});
	}

	setSelectedMember(member) {
		this.setState({
		  selectedMember: member,
		  modalIsOpen: true
		});
	}

	componentDidMount() {
		this.props.onLoad()
			.catch(err => {
				toast.error(err.toString());
			});
	}

	render() {
		const members = this.props.members.map(member => {
			return <MemberTile firstName={member.firstName} 
								lastName={member.lastName} 
								title={member.title} 
								key={member.id}
								clicked={() => this.setSelectedMember(member)}/>
		});

		return (
			<div>
				{/* 
				<Backdrop show={this.state.modalIsOpen} clicked={this.hideModal}/>
				<MemberDetail member={this.state.selectedMember} show={this.state.modalIsOpen} clicked={this.hideModal} />
				 */}
				 {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} clicked={this.hideModal}/> : null }
				{/* {this.state.modalIsOpen ? <MemberDetail member={this.state.selectedMember} show={this.state.modalIsOpen} clicked={this.hideModal} /> : null} */}
				{/* <Transition in={this.state.modalIsOpen} timeout={400} mountOnEnter unmountOnExit>
					{state => <MemberDetail member={this.state.selectedMember} show={state} clicked={this.hideModal} />}
				</Transition> */}
				<MemberDetail member={this.state.selectedMember} show={this.state.modalIsOpen} clicked={this.hideModal} />
				
				<p><Link to="/board/add">Add New</Link></p>
				<section className={styles.memberList}>
					{members}
				</section>
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
