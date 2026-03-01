import { Link } from 'react-router-dom';
import styles from "./Header.module.css"; // CSS Module 불러오기

export default function Header() {
    return (
        <header className={styles.header}> {/* header 태그에 styles.header 적용 */}
             <nav className={styles.navbar}> {/* nav 태그에 styles.navbar 적용 */}
                <p className={styles.navItem}> {/* 각 p 태그에 styles.navItem 적용 */}
                    <Link to="/" className={styles.navLink}>Home Page</Link> {/* Link 태그에 styles.navLink 적용 */}
                </p>
                <p className={styles.navItem}>
                    <Link to="/firstPage" className={styles.navLink}>First Page</Link>
                </p>
                  <p className={styles.navItem}>
                    <Link to="/secondPage" className={styles.navLink}>Second Page</Link>
                </p>
            </nav>
        </header>
    )
}