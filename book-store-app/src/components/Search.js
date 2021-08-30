import { useState } from "react";

const Search = ({passData}) => {
	const [searchString, setSearchString] = useState('');

  const onChangeSearch = e => {
    const { value } = e.target;
		setSearchString(value);
    passData(value);
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