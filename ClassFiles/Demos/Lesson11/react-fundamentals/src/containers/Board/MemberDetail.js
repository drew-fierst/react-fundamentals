import React, { Component } from 'react';
import styles from './MemberDetail.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class MemberDetail extends Component {
  state = {
    loadedMember: null
  };

  componentDidMount() {
    this.loadMember();
	}
	
	componentDidUpdate() {
		this.loadMember();
	}

	loadMember() {
		// eslint-disable-next-line eqeqeq
		if (!this.state.loadedMember || this.props.match.params.id != this.state.loadedMember.id) {
			axios
				.get('/boardmembers/' + this.props.match.params.id)
				.then(resp => {
					this.setState({
						loadedMember: resp.data
					});
				})
				.catch(err => {
					toast.error(err.toString());
				});
		}
	}

  deleteMemberHandler = () => {
		//axios.delete('/boardmembers/' + this.props.match.params.id)
		this.props.onDelete(this.state.loadedMember)
    	.then(() => {
				this.props.history.push('/board');
    	})
    	.catch(err => {
    	  toast.error(err.toString());
    	});
  };

  render() {
    let content = <p className={styles.instructions}>Please select a Board Member!</p>;
    if (this.props.id) {
      content = (
        <p className={styles.instructions}>Loading the Board Member!</p>
      );
    }
    if (this.state.loadedMember) {
      content = (
        <div className={styles.memberDetail}>
					<img src={"https://www.kazoopromotions.com" + this.state.loadedMember.imageUrl} 
						alt={'photo of ' + this.state.loadedMember.firstName + ' ' + this.state.loadedMember.lastName} />
          <h1>
            {this.state.loadedMember.firstName}{' '}
            {this.state.loadedMember.lastName}
          </h1>
          <p className={styles.jobTitle}>{this.state.loadedMember.title}</p>
          <div
            dangerouslySetInnerHTML={{ __html: this.state.loadedMember.bio }}
          />
          <div className={styles.edit}>
            <button className="Delete" onClick={this.deleteMemberHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return content;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (member) => dispatch(actions.deleteMemberAsync(member))
  }
}
export default connect(null, mapDispatchToProps)(MemberDetail);
