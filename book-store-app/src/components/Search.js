import { useState } from "react";

const Search = _ => {
	const [searchString, setSearchString] = useState('');

  const onChangeSearch = e => {
    const { value } = e.target;
    setSearchString(value);
  }

	return (
		<input
			className="input"
			placeholder="search"
			value={searchString}
			onChange={onChangeSearch}/>
	);
}

export default Search;