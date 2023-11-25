import { useBuscarPratos } from '@/hooks/useBuscarPratos'
import { IRestaurante } from '@/interfaces/IRestaurante'
import Prato from './Prato'
import styles from './Restaurante.module.scss'

interface RestauranteProps {
    restaurante: IRestaurante
}

const Restaurante = ({ restaurante }: RestauranteProps) => {
    const { pratos } = useBuscarPratos(restaurante.id)

    return (
        <section className={styles.restaurante}>
            <h2 className={styles.titulo}>
                {restaurante.nome}
            </h2>
            <div className={styles.pratos}>
                {pratos?.map(item => (
                    <Prato key={item.id} prato={item} />
                ))}
            </div>
        </section>
    )
}

export default Restaurante
