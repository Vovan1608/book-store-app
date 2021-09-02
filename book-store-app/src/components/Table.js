import React from "react";

import TableHeaders from "./TableHeaders";
import TableRow from "./TableRow";

const Table = ({searchStr}) => {
	const headers = ['Date', 'First Name', 'Last Name', 'Date of birth', 'Date of death', 'Actions'];

	return (
		<table className="table">
			<TableHeaders headers={headers}/>
			<TableRow search={searchStr}/>
		</table>
	);
}

export default Table;