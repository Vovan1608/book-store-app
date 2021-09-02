import React from "react";

const Card = ({name, author, description, path}) => {
	return (
		<div className="card_container">
			<div className="picture">
				<img src={path} alt={name} className="img_card"/>
			</div>
			<div className="book-name">{name}</div>
			<div className="author">{author}</div>
			<div className="description">{description}</div>
		</div>
	);
}

export default Card;