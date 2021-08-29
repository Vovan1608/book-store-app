import logo from '../logo.jpg';

const Logo = _ => {
	return(
		<div className="logo">
			<img src={logo} alt="logo" className="logo_img" />
		</div>
	);
}

export default Logo;