import Logo from "./Logo";
import PagePath from "./PagePath";

const Sidebar = () => {
	return (
    <nav className="sidebar">
      <Logo />
      <PagePath name="Authors"/>
      <PagePath name="Books" />
    </nav>
	);
}

export default Sidebar;