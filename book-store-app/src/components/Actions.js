import React from "react";
import { Link } from "react-router-dom";

import Action from "./Action";
import basket from "../actions/basket.svg";
import pencil from "../actions/pencil.svg";
import arrow from "../actions/arrow.svg";

import { deleteAxios, getAxios} from "../services/API";

const Actions = ({id, setPers, persons}) => {
	const onClick = e => {
		if (e.target.id === 'remove') {
			deleteAxios('authors', id);
			const filtered = persons.filter(el => el.id !== id);
			setPers(filtered);
		}

		if (e.target.id === 'edit') {
			const fetchData = async () => {
				const response = await getAxios(`/authors/${id}`);
				// postAxios('modal', response.data);
			}

			fetchData();
		}
	}

	return (
		<div className="actions" onClick={onClick} id={id}>
			<Link to="/modal">
				<Action text='pencil' path={pencil} id="edit" />
			</Link>
			<Action text='basket' path={basket} id="remove"/>
			<Link to="/books">
				<Action text='arrow' path={arrow} id="to_books"/>
			</Link>
		</div>
	);
}

export default Actions;