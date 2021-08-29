const Action = ({path, text}) => {
	return (
		<span className="action">
			<img src={path} alt={text} className="action_img" />
		</span>
	);
}

export default Action;