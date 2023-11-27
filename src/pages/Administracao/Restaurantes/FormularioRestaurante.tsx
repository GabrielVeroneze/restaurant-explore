import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import { useAdministrarRestaurantes } from '@/hooks/useAdministrarRestaurantes'
import { IRestaurante } from '@/interfaces/IRestaurante'

const FormularioRestaurante = () => {
    const { id } = useParams()
    const { cadastrarRestaurante, editarRestaurante } = useAdministrarRestaurantes()
    const [nomeRestaurante, setNomeRestaurante] = useState<string>('')

    useEffect(() => {
        if (id) {
            axios
                .get<IRestaurante>(
                    `http://localhost:8000/api/v2/restaurantes/${id}/`
                )
                .then(resposta => {
                    setNomeRestaurante(resposta.data.nome)
                })
        }
    }, [id])

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (id) {
            editarRestaurante(nomeRestaurante, id)
        } else {
            cadastrarRestaurante(nomeRestaurante)
        }
    }

    return (
        <form onSubmit={evento => handleSubmit(evento)}>
            <TextField
                label="Nome do Restaurante"
                variant="standard"
                value={nomeRestaurante}
                onChange={evento => setNomeRestaurante(evento.target.value)}
            />
            <Button type="submit" variant="outlined">
                Salvar
            </Button>
        </form>
    )
}

export default FormularioRestaurante
