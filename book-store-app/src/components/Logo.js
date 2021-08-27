import logo from '../logo.jpg';

export default function Logo() {
	return(
		<div className="logo">
			<img src={logo} alt="logo" className="logo_img" />
		</div>
	);
}