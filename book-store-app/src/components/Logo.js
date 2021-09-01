import logo from '../logo.jpg';

const Logo = () => {
	return(
		<div className="logo">
			<img src={logo} alt="logo" className="logo_img" />
		</div>
	);
}

export default Logo;