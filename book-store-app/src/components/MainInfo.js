import React from "react";
import { useState } from "react";

import Search from "./Search";
import Table from "./Table";
import AddAuthor from "./AddAuthor";


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