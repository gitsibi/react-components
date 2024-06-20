// import "../styles/HeaderStyle.css"
import './components/HeaderStyle.css';

function Header()
{
    return(
        <header>
            <img className="kalvium_logo"
            src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" ></img>
            <nav>
                <ul className="navbar_button">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">More</a>
                    </li>
                </ul>
            </nav>
            <a href="#">
                <button>Contact</button>
            </a>
        </header>
    )
}

export default Header;
