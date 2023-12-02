import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useAdministrarPratos } from '@/hooks/useAdministrarPratos';
import { usePratoForm } from '@/hooks/usePratoForm';

const FormularioPrato = () => {
    const { cadastrarPrato } = useAdministrarPratos()
    const { nome, setNome, descricao, setDescricao, tag, setTag, restaurante, setRestaurante, imagem, selecionarArquivo, listaTags, listaRestaurantes } = usePratoForm()

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

        cadastrarPrato(formData)

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
                        value={restaurante}
                        onChange={evento => setRestaurante(evento.target.value)}
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
