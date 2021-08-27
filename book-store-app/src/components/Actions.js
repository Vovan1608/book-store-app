import Action from "./Action";
import basket from "../actions/basket.svg";
import pencil from "../actions/pencil.svg";
import arrow from "../actions/arrow.svg";

export default function Actions() {
	return (
		<div className="actions">
			<Action text='pencil' path={pencil}/>
			<Action text='basket' path={basket}/>
			<Action text='arrow' path={arrow}/>
		</div>
	);
}