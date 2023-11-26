import axios from 'axios'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'

const FormularioRestaurante = () => {
    const [nomeRestaurante, setNomeRestaurante] = useState<string>('')

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        axios
            .post('http://localhost:8000/api/v2/restaurantes/', {
                nome: nomeRestaurante,
            })
            .then(() => {
                alert('Restaurante cadastrado com sucesso!')
            })
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
