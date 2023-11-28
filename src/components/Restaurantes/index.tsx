import { useState } from 'react';
import { IconButton, TextField } from '@mui/material'
import { useBuscarRestaurantes } from '@/hooks/useBuscarRestaurantes'
import SearchIcon from '@mui/icons-material/Search';
import Restaurante from './Restaurante'
import styles from './Restaurantes.module.scss'

const Restaurantes = () => {
    const { listaRestaurantes, carregarDados, proximaPagina, paginaAnterior } = useBuscarRestaurantes()
    const [termoDePesquisa, setTermoDePesquisa] = useState<string>('')

    const handleSearchSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        
        carregarDados('http://localhost:8000/api/v1/restaurantes/', {
            params: {
                search: termoDePesquisa
            }
        })
    }

    return (
        <section className={styles.restaurantes}>
            <div className={styles.container}>
                <h1 className={styles.titulo}>
                    Os restaurantes mais <em>bacanas</em>!
                </h1>
                <form onSubmit={evento => handleSearchSubmit(evento)}>
                    <TextField
                        label="Busque por Restaurantes"
                        variant="outlined"
                        size="small"
                        value={termoDePesquisa}
                        onChange={evento => setTermoDePesquisa(evento.target.value)}
                    />
                    <IconButton type="submit" aria-label="busca">
                        <SearchIcon />
                    </IconButton>
                </form>
            </div>
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
