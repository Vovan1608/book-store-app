export default function Action(props) {
	return (
		<span className="action">
			<img src={props.path} alt={props.text} className="action_img" />
		</span>
	);
}