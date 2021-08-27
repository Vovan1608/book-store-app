import Search from "./Search";
import PagePath from "./PagePath";
import TableHeaders from "./TableHeaders";
import TableBody from "./TableBody";

const headers = ['Date', 'First Name', 'Last Name', 'Date of birth', 'Date of death', 'Actions'];

export default function MainInfo() {
	return (
		<main className="main">
			<Search />
			<PagePath name="Add Author" />
			<TableHeaders headers={headers} />
		</main>
	);
}