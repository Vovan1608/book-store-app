import Search from "./Search";
import PagePath from "./PagePath";
import Table from "./Table";

const MainInfo = _ => {
	return (
		<main className="main">
			<Search />
			<PagePath name="Add Author" />
			<Table />
		</main>
	);
}

export default MainInfo;