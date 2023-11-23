import styles from './Categorias.module.scss'

const Categorias = () => {
    return (
        <section className={styles.categorias}>
            <div className={styles.tipo}>
                <img
                    className={styles.imagem}
                    src="/imagens/cafedamanha.png"
                    alt="Café da manhã"
                />
                <h4 className={styles.subtitulo}>Café da manhã</h4>
            </div>
            <div className={styles.tipo}>
                <img
                    className={styles.imagem}
                    src="/imagens/almoco.png"
                    alt="Almoço"
                />
                <h4 className={styles.subtitulo}>Almoço</h4>
            </div>
            <div className={styles.tipo}>
                <img
                    className={styles.imagem}
                    src="/imagens/jantar.png"
                    alt="Jantar"
                />
                <h4 className={styles.subtitulo}>Jantar</h4>
            </div>
            <div className={styles.tipo}>
                <img
                    className={styles.imagem}
                    src="/imagens/sobremesa.png"
                    alt="Sobremesas"
                />
                <h4 className={styles.subtitulo}>Sobremesas</h4>
            </div>
        </section>
    )
}

export default Categorias
