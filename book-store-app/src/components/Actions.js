import Action from "./Action";
import basket from "../actions/basket.svg";
import pencil from "../actions/pencil.svg";
import arrow from "../actions/arrow.svg";
import { Link } from "react-router-dom";
import { deleteAxios, getAxios } from "../services/API";

const Actions = ({id}) => {
	const onClick = e => {
		if (e.target.id === 'remove') {
			deleteAxios(id);
		}

		if (e.target.id === 'edit') {
			document.getElementById('modal_el').classList.remove('hide');

			const dataForEdit = async () => {
				await getAxios(`/authors/${id}`).then(res => {
					const {createdAt, id, name, surname, date_of_birth, date_of_death} = res.data;

					const objData = Object.entries({createdAt, id, name, surname, date_of_birth, date_of_death});

					objData.forEach(([key, val]) => {
						document.getElementById(key).value = val;
					});
				});
			}

			dataForEdit();
		}
	}

	return (
		<div className="actions" onClick={onClick} id={id}>
			<Action text='pencil' path={pencil} id="edit" />
			<Action text='basket' path={basket} id="remove"/>
			<Link to="/books">
				<Action text='arrow' path={arrow} id="to_books"/>
			</Link>
		</div>
	);
}

export default Actions;