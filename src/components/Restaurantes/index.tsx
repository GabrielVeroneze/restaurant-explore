import { useState } from 'react'
import { Button, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import { useBuscarRestaurantes } from '@/hooks/useBuscarRestaurantes'
import SearchIcon from '@mui/icons-material/Search'
import Restaurante from './Restaurante'
import styles from './Restaurantes.module.scss'

const Restaurantes = () => {
    const { listaRestaurantes, carregarDados, proximaPagina, paginaAnterior } = useBuscarRestaurantes()
    const [termoDePesquisa, setTermoDePesquisa] = useState<string>('')
    const [opcaoDeOrdenacao, setOpcaoDeOrdenacao] = useState<string>('')

    const handleSearchSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        carregarDados('http://localhost:8000/api/v1/restaurantes/', {
            params: {
                search: termoDePesquisa,
                ordering: opcaoDeOrdenacao
            }
        })
    }

    return (
        <section className={styles.restaurantes}>
            <div className={styles.container}>
                <h1 className={styles.titulo}>
                    Os restaurantes mais <em>bacanas</em>!
                </h1>
                <form
                    className={styles.controles}
                    onSubmit={evento => handleSearchSubmit(evento)}
                >
                    <FormControl size='small'>
                        <InputLabel htmlFor='search-input'>Busque por Restaurantes</InputLabel>
                        <OutlinedInput
                            id='search-input'
                            label="Busque por Restaurantes"
                            value={termoDePesquisa}
                            onChange={evento => setTermoDePesquisa(evento.target.value)}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <SearchIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl
                        size="small"
                        sx={{
                            width: '150px',
                        }}
                    >
                        <InputLabel id="select-label">Ordenar Por</InputLabel>
                        <Select
                            labelId="select-label"
                            label="Ordenar Por"
                            value={opcaoDeOrdenacao}
                            onChange={evento => setOpcaoDeOrdenacao(evento.target.value)}
                        >
                            <MenuItem sx={{ fontStyle: 'italic' }} value="">
                                Padrão
                            </MenuItem>
                            <MenuItem value="id">ID</MenuItem>
                            <MenuItem value="nome">Nome</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type='submit' variant='contained'>
                        Aplicar
                    </Button>
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
