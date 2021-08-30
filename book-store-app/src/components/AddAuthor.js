import Modal from "./Modal";

const AddAuthor = _ => {
	const onClick = e => {
		e.target.children[0].classList.remove('hide');
	}

	return (
		<div className="text_path" onClick={onClick} id="add_author">
			Add Author
			<Modal />
		</div>
	);
}

export default AddAuthor;