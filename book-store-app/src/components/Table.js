import TableHeaders from "./TableHeaders";
import TableRow from "./TableRow";

const Table = _ => {
	const headers = ['Date', 'First Name', 'Last Name', 'Date of birth', 'Date of death', 'Actions'];

	return (
		<table className="table">
			<TableHeaders headers={headers}/>
			<TableRow />
		</table>
	);
}

export default Table;