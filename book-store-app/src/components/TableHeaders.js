export default function TableHeaders(props) {
	return (
		<table className="table">
			<thead>
				<tr>
					{props.headers.map(header => <td key={header}>{header}</td>)}
				</tr>
			</thead>
		</table>
	);
}