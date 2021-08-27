import Logo from "./Logo";
import PagePath from "./PagePath";

export default function Sidebar() {
	return (
		<nav className="sidebar">
			<Logo />
			<PagePath name="Authors" />
			<PagePath name="Books" />
		</nav>
	);
}