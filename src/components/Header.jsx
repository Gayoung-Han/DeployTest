import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
             <nav>
                <p>
                    <Link to="/">Home Page</Link>
                </p>
                <p>
                    <Link to="/firstPage">First Page</Link>
                </p>
                  <p>
                    <Link to="/secondPage">Second Page</Link>
                </p>
            </nav>
        </header>
    )
}