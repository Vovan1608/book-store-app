import Search from "./Search";
import Table from "./Table";
import AddAuthor from "./AddAuthor";
import { useState } from "react";

const MainInfo = () => {
	const [searchExp, setSearchExp] = useState('');

	return (
		<main className="main">
			<Search passData={setSearchExp}/>
			<AddAuthor />
			<Table searchStr={searchExp}/>
		</main>
	);
}

export default MainInfo;