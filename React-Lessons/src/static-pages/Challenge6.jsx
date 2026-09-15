
/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */

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
function MainContent() {
    return (
        <main>
            <h1>Reason I am excited to learn React</h1>
            <ol>
                <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer if I know React</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2024 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

export default Page