import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useAdministrarPratos } from '@/hooks/useAdministrarPratos';
import { usePratoForm } from '@/hooks/usePratoForm';
import { IPrato } from '@/interfaces/IPrato';
import http from '@/http';

const FormularioPrato = () => {
    const { id } = useParams()
    const { cadastrarPrato, editarPrato } = useAdministrarPratos()
    const { pratoForm, setPratoForm, selecionarArquivo, listaTags, listaRestaurantes } = usePratoForm()

    useEffect(() => {
        if (id) {
            http
                .get<IPrato>(`pratos/${id}/`)
                .then(resposta => {
                    setNome(resposta.data.nome)
                    setDescricao(resposta.data.descricao)
                    setTag(resposta.data.tag)
                    setRestaurante(resposta.data.restaurante)
                })
        }
    }, [id])

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const formData = new FormData()
        
        formData.append('nome', nome)
        formData.append('descricao', descricao)
        formData.append('tag', tag)
        formData.append('restaurante', String(restaurante))
        
        if (imagem) {
            formData.append('imagem', imagem)
        }

        if (id) {
            editarPrato(formData, id)
        } else {
            cadastrarPrato(formData)
        }

        setNome('')
        setDescricao('')
        setTag('')
        setRestaurante('')
    }

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
                    value={pratoForm.nome}
                    onChange={evento => 
                        setPratoForm({
                            ...pratoForm,
                            nome: evento.target.value
                        })
                    }
                    fullWidth
                    required
                />
                <TextField
                    label="Descrição do Prato"
                    variant="standard"
                    value={pratoForm.descricao}
                    onChange={evento => 
                        setPratoForm({
                            ...pratoForm,
                            descricao: evento.target.value
                        })
                    }
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
                        value={pratoForm.tag}
                        onChange={evento => 
                            setPratoForm({
                                ...pratoForm,
                                tag: evento.target.value
                            })
                        }
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: '188px'
                                }
                            } 
                        }}
                    >
                        {listaTags.map(tag => (
                            <MenuItem key={tag.id} value={tag.value}>
                                {tag.value}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl
                    variant="standard"
                    fullWidth
                >
                    <InputLabel id="select-restaurante">Restaurante do Prato</InputLabel>
                    <Select
                        labelId="select-restaurante"
                        value={pratoForm.restaurante}
                        onChange={evento => 
                            setPratoForm({
                                ...pratoForm,
                                restaurante: evento.target.value
                            })
                        }
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: '188px'
                                }
                            } 
                        }}
                    >
                        {listaRestaurantes.map(restaurante => (
                            <MenuItem key={restaurante.id} value={restaurante.id}>
                                {restaurante.nome}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="outlined"
                    component="label"
                    size="large"
                    endIcon={<UploadFileIcon />}
                    sx={{
                        borderColor: 'rgba(0, 0, 0, 0.42)',
                        color: '#666666',
                        fontSize: '1rem',
                        justifyContent: 'left',
                        textTransform: 'unset'
                    }}
                >
                    Imagem do Prato
                    <input
                        type="file"
                        onChange={evento => selecionarArquivo(evento)}
                        hidden
                    />
                </Button>
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
