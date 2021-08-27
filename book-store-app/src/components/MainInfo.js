import Search from "./Search";
import PagePath from "./PagePath";
import Table from "./Table";

export default function MainInfo() {
	return (
		<main className="main">
			<Search />
			<PagePath name="Add Author" />
			<Table />
		</main>
	);
}