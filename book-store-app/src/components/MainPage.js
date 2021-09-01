import Sidebar from "./Sidebar";
import Header from "./Header";
import MainInfo from "./MainInfo";
import Books from "./Books";
import Modal from "./Modal";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const MainPage = () => {
	return (
		<Router>
			<div className="wrap">
				<Header />
				<Sidebar />
				<Switch>
					<Route exact path="/" component={MainInfo} />
					<Route path="/authors" component={MainInfo} />
					<Route path="/books" component={Books} />
					<Route path="/modal" component={Modal} />
				</Switch>
			</div>
		</Router>
	);
}

export default MainPage;