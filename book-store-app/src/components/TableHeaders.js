import React from "react";

const TableHeaders = ({headers}) => {
	return (
		<thead>
			<tr>
				{headers.map(header => <td key={header}>{header}</td>)}
			</tr>
		</thead>
	);
}

export default TableHeaders;