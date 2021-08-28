export default function Card(props) {
	return (
		<div className="card_container">
			<div className="picture">
				<img src={props.path} alt={props.name} className="img_card"/>
			</div>
			<div className="author">{props.name}</div>
			<div className="public">{props.publication}</div>
			<div className="description">{props.description}</div>
		</div>
	);
}