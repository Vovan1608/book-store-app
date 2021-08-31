import Action from "./Action";
import basket from "../actions/basket.svg";
import pencil from "../actions/pencil.svg";
import arrow from "../actions/arrow.svg";
import { deleteAxios, getAxios } from "../services/API";


const Actions = ({id}) => {
	const onClick = e => {
		if (e.target.id === 'remove') {
			deleteAxios(id);
		}

		if (e.target.id === 'edit') {
			document.getElementById('modal_el').classList.remove('hide');
			getAxios(`/authors/${id}`).then(res => {
				const {createdAt, id, name, surname, date_of_birth, date_of_death} = res.data;
				
			});
		}
	}

	return (
		<div className="actions" onClick={onClick} id={id}>
			<Action text='pencil' path={pencil} id="edit" />
			<Action text='basket' path={basket} id="remove"/>
			<Action text='arrow' path={arrow} id="to_books"/>
		</div>
	);
}

export default Actions;