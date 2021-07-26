import React, { Component } from 'react';
import styles from './MemberDetail.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';

class MemberDetail extends Component {
  state = {
    loadedMember: null
  };

  componentDidUpdate() {
    if (
      this.props.id &&
      (!this.state.loadedMember || this.state.loadedMember.Id !== this.props.id)
    ) {
      axios
        .get('/boardmembers/' + this.props.id)
        .then(resp => {
          this.setState({ loadedMember: resp.data });
        })
        .catch(err => {
          toast.error(err.toString());
        });
    }
  }

  deleteMemberHandler = () => {
    axios.delete('/boardmembers/' + this.props.id)
    	.then(resp => {
    		console.log(resp);
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
					<img src={"http://kazoopromotions.com" + this.state.loadedMember.ImageUrl} 
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
