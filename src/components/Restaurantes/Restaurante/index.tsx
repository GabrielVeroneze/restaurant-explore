import { IRestaurante } from '@/interfaces/IRestaurante'
import Prato from './Prato'
import styles from './Restaurante.module.scss'

interface RestauranteProps {
    restaurante: IRestaurante
}

const Restaurante = ({ restaurante }: RestauranteProps) => {
    return (
        <section className={styles.restaurante}>
            <h2 className={styles.titulo}>
                {restaurante.nome}
            </h2>
            {restaurante.pratos?.map(item => (
                <Prato key={item.id} prato={item} />
            ))}
        </section>
    )
}

export default Restaurante
