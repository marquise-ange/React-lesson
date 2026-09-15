/**
 * Challenge: complete the Navbar to match the Figma design
 * 
 * Hints:
 * - for semantic HTML purposes, the Navbar should render
 *   a <header> with a <nav> nested inside. The image and "ReactFacts"
 *   text elements can both be rendered as children inside the <nav>
 * - reference the Figma design for the most accurate info about
 *   colors, sizes, font information, etc.
 */

function Navbar(){
    return(
        <header>
            <nav>
                <img src="/react-logo.png" alt="React logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}
export default Navbar