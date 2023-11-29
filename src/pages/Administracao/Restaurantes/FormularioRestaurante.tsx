import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, TextField, Typography } from '@mui/material'
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
        <Box
            component='main'
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                Formulário de restaurantes
            </Typography>
            <form onSubmit={evento => handleSubmit(evento)}>
                <TextField
                    label="Nome do Restaurante"
                    variant="standard"
                    value={nomeRestaurante}
                    onChange={evento => setNomeRestaurante(evento.target.value)}
                    fullWidth
                    required
                />
                <Button type="submit" variant="outlined" fullWidth sx={{ mt: 2 }}>
                    Salvar
                </Button>
            </form>
        </Box>
    )
}

export default FormularioRestaurante
