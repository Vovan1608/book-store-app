import Sidebar from "./Sidebar";
import Header from "./Header";
import MainInfo from "./MainInfo";
import Books from "./Books";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function MainPage() {
	return (
		<Router>
			<div className="wrap">
				<Header />
				<Sidebar />
				<Switch>
					<Route exact path="/authors" component={MainInfo} />
					<Route path="/books" component={Books} />
				</Switch>
			</div>
		</Router>
	);
}