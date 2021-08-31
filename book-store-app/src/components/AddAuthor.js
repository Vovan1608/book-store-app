const AddAuthor = _ => {
	const onClick = e => {
		document.getElementById('modal_el').classList.remove('hide');

		document.getElementById('createdAt').value = '';
		document.getElementById('name').value = '';
		document.getElementById('surname').value = '';
		document.getElementById('date_of_birth').value = '';
		document.getElementById('date_of_death').value = '';
		document.getElementById('id').value = '';
	}

	return (
		<div className="text_path" onClick={onClick} id="add_author">
			Add Author
		</div>
	);
}

export default AddAuthor;