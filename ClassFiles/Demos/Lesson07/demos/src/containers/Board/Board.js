import React, { Component } from 'react';
import styles from './Board.module.css';
import MemberTile from '../../components/Board/MemberTile';
import MemberDetail from '../../components/Board/MemberDetail';
import NewMember from '../../components/Board/NewMember';

class Board extends Component {
	render() {
		return (
			<div>
				<section className={styles.memberList}>
					<MemberTile />
					<MemberTile />
					<MemberTile />
				</section>
				<section>
					<MemberDetail />
				</section>
				<section>
					<NewMember />
				</section>
			</div>
		);
	}
}

export default Board;
