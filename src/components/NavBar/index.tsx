import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <nav className={styles.navegacao}>
            <ul>
                <li className={styles.item}>
                    <Link className={styles.link} to="/">
                        Home
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} to="/restaurantes">
                        Restaurantes
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
