import Logo from "./Logo";
import PagePath from "./PagePath";

const Sidebar = _ => {
	return (
    <nav className="sidebar">
      <Logo />
      <PagePath name="Authors"/>
      <PagePath name="Books" />
    </nav>
	);
}

export default Sidebar;