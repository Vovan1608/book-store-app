import Modal from "./Modal";

const AddAuthor = _ => {
	const onClick = e => {
		document.getElementById('modal_el').classList.remove('hide');
	}

	return (
		<div className="text_path" onClick={onClick} id="add_author">
			Add Author
		</div>
	);
}

export default AddAuthor;