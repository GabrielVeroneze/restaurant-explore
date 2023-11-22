import styles from './Banner.module.scss'

const Banner = () => {
    return (
        <section className={styles.banner}>
            <h1 className={styles.titulo}>
                Restaurant Explore
            </h1>
            <p className={styles.texto}>
                Felicidade em cada prato.
            </p>
        </section>
    )
}

export default Banner
