import styles from './Contato.module.scss'

const Contato = () => {
    return (
        <section className={styles.contato}>
            <img
                className={styles.imagem}
                src="/imagens/cozinhar_01.jpg"
                alt="Um prato conceitual"
            />
            <div className={styles.conteudo}>
                <h2 className={styles.texto}>A melhor rede de restaurantes!</h2>
                <p>seja um parceiro agora:</p>
                <p>
                    ligue para{' '}
                    <a className={styles.link} href="callto:99999999999">
                        (99) 99999-999
                    </a>
                </p>
            </div>
            <img
                className={styles.imagem}
                src="/imagens/cozinhar_02.jpg"
                alt="Um hambúrguer desconstruído"
            />
        </section>
    )
}

export default Contato
