import { Link } from 'react-router-dom'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useAdministrarPratos } from '@/hooks/useAdministrarPratos'

const AdministracaoPratos = () => {
    const { pratos, excluirPrato } = useAdministrarPratos()

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 700 }}>
                            Nome
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>
                            Tag
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>
                            Imagem
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>
                            Editar
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pratos.map(prato => (
                        <TableRow key={prato.id}>
                            <TableCell>
                                {prato.nome}
                            </TableCell>
                            <TableCell>
                                {prato.tag}
                            </TableCell>
                            <TableCell>
                                [{' '}
                                <a href={prato.imagem} target="_blank">
                                    Ver Imagem
                                </a>
                                {' '}]
                            </TableCell>
                            <TableCell>
                                [{' '}
                                <Link to={`/admin/pratos/${prato.id}`}>
                                    Editar
                                </Link>
                                {' '}]
                            </TableCell>
                            <TableCell>
                                <Button
                                    color="error"
                                    variant="outlined"
                                    onClick={() => excluirPrato(prato.id)}
                                >
                                    Excluir
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoPratos
