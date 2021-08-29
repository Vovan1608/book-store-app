import Search from "./Search";
import Table from "./Table";
import AddAuthor from "./AddAuthor";

const MainInfo = _ => {
	return (
		<main className="main">
			<Search />
			<AddAuthor />
			<Table />
		</main>
	);
}

export default MainInfo;