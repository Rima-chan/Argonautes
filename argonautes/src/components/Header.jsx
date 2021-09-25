import HeaderLogo from '../assets/wcs_logo.png';

function Header() {
    return (
        <header className="my-8">
            <img src={HeaderLogo} alt="Logo Wild Code School"/>
        </header>
    )
}

export default Header;