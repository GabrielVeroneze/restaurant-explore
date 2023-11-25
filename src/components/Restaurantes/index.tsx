import Restaurante from './Restaurante'
import styles from './Restaurantes.module.scss'

const Restaurantes = () => {

    return (
        <section className={styles.restaurantes}>
            <h1 className={styles.titulo}>
                Os restaurantes mais <em>bacanas</em>!
            </h1>
            {listaRestaurantes?.map(item => (
                <Restaurante key={item.id} restaurante={item} />
            ))}
            {proximaPagina && (
                <button
                    className={styles.mais}
                    onClick={() => verMais()}
                >
                    Ver Mais
                </button>
            )}
        </section>
    )
}

export default Restaurantes
