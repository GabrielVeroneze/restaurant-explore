import { useBuscarRestaurantes } from '@/hooks/useBuscarRestaurantes'
import Restaurante from './Restaurante'
import styles from './Restaurantes.module.scss'

const Restaurantes = () => {
    const { listaRestaurantes, carregarDados, proximaPagina, paginaAnterior } = useBuscarRestaurantes()

    return (
        <section className={styles.restaurantes}>
            <h1 className={styles.titulo}>
                Os restaurantes mais <em>bacanas</em>!
            </h1>
            {listaRestaurantes?.map(item => (
                <Restaurante key={item.id} restaurante={item} />
            ))}
            <button
                className={styles.botao}
                onClick={() => carregarDados(paginaAnterior)}
                disabled={!paginaAnterior}
            >
                Página Anterior
            </button>
            <button
                className={styles.botao}
                onClick={() => carregarDados(proximaPagina)}
                disabled={!proximaPagina}
            >
                Próxima Página
            </button>
        </section>
    )
}

export default Restaurantes
