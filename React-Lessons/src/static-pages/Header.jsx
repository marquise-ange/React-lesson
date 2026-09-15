function Header() {
    return (
        <header className="header">
            <img src="react-logo.png"  className="nav-Logo"  alt="React logo" />
            <nav>
                <ul className="nav-List">
                    <li className="nav-List-Item">Pricing</li>
                    <li className="nav-List-Item">About</li>
                    <li className="nav-List-Item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header