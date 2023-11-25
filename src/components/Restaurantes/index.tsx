import { IRestaurante } from '@/interfaces/IRestaurante'
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
        </section>
    )
}

export default Restaurantes
