import { Link } from 'react-router-dom'

const PagePath = ({name}) => {
	return (
		<div className="text_path">
			<Link to={`/${name.toLowerCase()}`}>
				{name}
			</Link>
		</div>
	);
}

export default PagePath;