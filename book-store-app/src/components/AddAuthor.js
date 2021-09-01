const AddAuthor = _ => {
	const onClick = e => {
		document.getElementById('modal_el').classList.remove('hide');

		const fields = ['createdAt', 'id', 'name', 'surname', 'date_of_birth', 'date_of_death'];

		fields.forEach(el => document.getElementById(el).value = '');
	}

	return (
		<div className="text_path" onClick={onClick} id="add_author">
			Add Author
		</div>
	);
}

export default AddAuthor;