import { Link } from 'react-router-dom'

export default function PagePath(props) {
	return (
		<div className="text_path">
			<Link to={`/${props.name.toLowerCase()}`}>
				{props.name}
			</Link>
		</div>
	);
}