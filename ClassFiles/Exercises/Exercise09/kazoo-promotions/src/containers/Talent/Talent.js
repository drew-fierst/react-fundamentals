import React, { Component } from 'react';
import styles from './Talent.module.css';
import customAxios from '../../axios';
import { toast } from 'react-toastify';
import withUser from '../../hoc/withUser';
import { Link } from 'react-router-dom';

class Talent extends Component {

	state = {
		artists: []
	};

	componentDidMount() {
		customAxios.get('/talent')
			.then(resp => {
				this.setState({ artists: resp.data });
			})
			.catch(err => {
				toast.error(err.message);
			})
	}

	render() {

		const content = this.state.artists.map(artist => {
			return <Link to={"/talent/" + artist.id} className={styles.tile} key={artist.id}>
				<img src={'https://www.kazoopromotions.com' + artist.imageUrl} alt={artist.name + ' picture'} />
				<div>
					<span><i className={"fas fa-user"} />{artist.name}</span>
					<span><i className={"fas fa-globe"} />{artist.location}</span>
				</div>
			</Link>
		})


		return (
			<div className={styles.container}>
				<h1>Kazoo Promotions. <span>Talent</span></h1>
				<p>{this.props.user}</p>
				<section className={styles.wrapper}>
					{content}
				</section>
			</div>
		);
	}

}

export default withUser(Talent);
