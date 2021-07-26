import React from 'react';

export default function(props) {
	return (
		<div className="board-member-detail">
		<h2>{props.firstName} {props.lastName}, {props.title}</h2>
		<img src={props.photo} alt="board member" />
		<div className="bio" dangerouslySetInnerHTML={{__html: props.bio}}></div>
	</div>
	);
}
