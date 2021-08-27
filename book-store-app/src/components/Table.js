import TableHeaders from "./TableHeaders";
import TableRow from "./TableRow";

const headers = ['Date', 'First Name', 'Last Name', 'Date of birth', 'Date of death', 'Actions'];

export default function Table() {
	return (
		<table className="table">
			<TableHeaders headers={headers}/>
			<TableRow />
		</table>
	);
}