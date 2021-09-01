import { Link } from "react-router-dom";
const AddAuthor = () => {
	return (
		<Link to="/modal">
			<div className="text_path" id="add_author">
				Add Author
			</div>
		</Link>
	);
}

export default AddAuthor;