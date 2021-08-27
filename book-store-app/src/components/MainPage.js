import Sidebar from "./Sidebar";
import Header from "./Header";
import MainInfo from "./MainInfo";

export default function MainPage() {
	return (
		<div className="wrap">
			<Header />
			<Sidebar />
			<MainInfo />
		</div>
	);
}