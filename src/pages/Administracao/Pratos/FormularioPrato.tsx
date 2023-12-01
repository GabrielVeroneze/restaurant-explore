import { useEffect, useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { ITag } from '@/interfaces/ITag'
import http from '@/http'

const FormularioPrato = () => {
    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')
    const [tag, setTag] = useState<string>('')

    return (
        <Box
            component="main"
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                Formulário de Pratos
            </Typography>
            <Box
                component="form"
                onSubmit={evento => handleSubmit(evento)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: '100%'
                }}
            >
                <TextField
                    label="Nome do Prato"
                    variant="standard"
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label="Descrição do Prato"
                    variant="standard"
                    value={descricao}
                    onChange={evento => setDescricao(evento.target.value)}
                    fullWidth
                    required
                />
                <FormControl
                    variant="standard"
                    fullWidth
                >
                    <InputLabel id="select-tag">Tag do Prato</InputLabel>
                    <Select
                        labelId="select-tag"
                        value={tag}
                        onChange={evento => setTag(evento.target.value)}
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: '188px'
                                }
                            } 
                        }}
                    >
                </FormControl>
                <Button
                    type="submit"
                    variant="outlined"
                    fullWidth
                >
                    Salvar
                </Button>
            </Box>
        </Box>
    )
}

export default FormularioPrato
