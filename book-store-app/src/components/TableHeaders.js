export default function TableHeaders(props) {
	return (
		<thead>
			<tr>
				{props.headers.map(header => <td key={header}>{header}</td>)}
			</tr>
		</thead>
	);
}