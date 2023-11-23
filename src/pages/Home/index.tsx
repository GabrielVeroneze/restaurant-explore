import { Link } from 'react-router-dom'
import NavBar from '@/components/NavBar'
import Banner from '@/components/Banner'
import Rodape from '@/components/Rodape'
import Contato from './Contato'
import Categorias from './Categorias'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <Contato />
            <Categorias />
            <div className={styles.links}>
                <h3>Conheça os melhores restaurantes</h3>
                <p>
                    Clique <Link to="/restaurantes">aqui</Link>
                </p>
            </div>
            <Rodape />
        </>
    )
}

export default Home
