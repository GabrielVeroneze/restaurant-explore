import axios from 'axios'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'

const FormularioRestaurante = () => {
    const [nomeRestaurante, setNomeRestaurante] = useState<string>('')

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
