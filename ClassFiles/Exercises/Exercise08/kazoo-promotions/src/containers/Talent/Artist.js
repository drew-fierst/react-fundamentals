import React, { Component } from 'react';
import styles from './Artist.module.css';
import customAxios from '../../axios';
import { toast } from 'react-toastify';
import withUser from '../../hoc/withUser';

class Artist extends Component {

	state = {
		artist: null
	};

	componentDidMount() {
		customAxios.get('/talent/' + '104')
			.then(resp => {
				this.setState({artist: resp.data});
			})
			.catch(err => {
				toast.error(err.message);
			});
	}

	render() {
		let tagContent = '';
		let artistContent = '';
		if (this.state.artist) {
			tagContent = this.state.artist.tags.split(',').map(tag => <li key={tag}>{tag}</li>);
			artistContent = (
				<article className={styles.detail}>
					<header>
						<h2>{this.state.artist.name} <span>{this.state.artist.genre}</span></h2>
					</header>
					<div className={styles.wrapper}>
						<ul className={styles.taglist}>
							<li>Tags &#9658;</li>
							{tagContent}
						</ul>

						<div>
							<img src={'https://www.kazoopromotions.com' + this.state.artist.imageUrl} alt={this.state.artist.name + ' picture'} />
						</div>

						<ul className={styles.social}>
							<li>
								<span><i className="fas fa-map-marker-alt"></i>Location</span>
								{this.state.artist.location}
							</li>
							<li>
								<span><i className="fas fa-link"></i> Social Connect</span>
								<ul className={styles.connect}>
									<li><i className="fab fa-facebook-f"></i></li>
									<li><i className="fab fa-twitter"></i></li>
									<li><i className="fab fa-soundcloud"></i></li>
									<li><i className="fab fa-napster"></i></li>
									<li><i className="fab fa-youtube"></i></li>
									<li><i className="fab fa-spotify"></i></li>
									<li><i className="fab fa-vimeo"></i></li>
									<li><i className="fab fa-instagram"></i></li>
								</ul>
							</li>
						</ul>

						<div className={styles.description}>
							<p>{this.state.artist.description}</p>
						</div>
					</div>
				</article>
			);
		}

		return (
			<div className={styles.container}>
				<h1>Kazoo Promotions. <span>Artist Profile</span></h1>
				<p>{this.props.user}</p>
				{artistContent}
			</div>
		);
	}

}

export default withUser(Artist);
