import styles from './Rodape.module.scss'

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <p>
                Copyright &copy; {new Date().getFullYear()} Restaurant Explore
            </p>
            <ul className={styles.lista}>
                <li className={styles.icone}>
                    <i className="fa fa-facebook"></i>
                </li>
                <li className={styles.icone}>
                    <i className="fa fa-twitter"></i>
                </li>
                <li className={styles.icone}>
                    <i className="fa fa-linkedin"></i>
                </li>
                <li className={styles.icone}>
                    <i className="fa fa-rss"></i>
                </li>
                <li className={styles.icone}>
                    <i className="fa fa-dribbble"></i>
                </li>
            </ul>
            <p>
                Uma alegria <em>a cada prato</em>
            </p>
        </footer>
    )
}

export default Rodape
