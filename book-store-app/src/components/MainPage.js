import Sidebar from "./Sidebar";
import Header from "./Header";
// import MainInfo from "./MainInfo";
import Books from "./Books";

export default function MainPage() {
	return (
		<div className="wrap">
			<Header />
			<Sidebar />
			{/* <MainInfo /> */}
			<Books />
		</div>
	);
}