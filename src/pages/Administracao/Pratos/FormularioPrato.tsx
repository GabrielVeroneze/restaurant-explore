import { useEffect, useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { ITag } from '@/interfaces/ITag'
import http from '@/http'

const FormularioPrato = () => {
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
