import React, { Component } from 'react';
import styles from './MemberDetail.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';

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
		if (!this.state.loadedMember || this.props.match.params.id != this.state.loadedMember.Id) {
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
    axios.delete('/boardmembers/' + this.props.match.params.id)
    	.then(resp => {
				console.log(resp);
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
					<img src={"https://www.kazoopromotions.com" + this.state.loadedMember.ImageUrl} 
						alt={'photo of ' + this.state.loadedMember.FirstName + ' ' + this.state.loadedMember.LastName} />
          <h1>
            {this.state.loadedMember.FirstName}{' '}
            {this.state.loadedMember.LastName}
          </h1>
          <p className={styles.jobTitle}>{this.state.loadedMember.Title}</p>
          <div
            dangerouslySetInnerHTML={{ __html: this.state.loadedMember.Bio }}
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

export default MemberDetail;
