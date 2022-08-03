import './navbar.css';

const Navbar = ({route,setRoute}) => {
	
	return(
		<header className='navbar'>
        <div id="Login" onClick={ () => setRoute("Login")} className='navbar__item'>Login</div>
        <div id="Register" onClick={() => setRoute("Register")} className='navbar__item'>Register</div>
    </header>	
    )
}

export default Navbar;