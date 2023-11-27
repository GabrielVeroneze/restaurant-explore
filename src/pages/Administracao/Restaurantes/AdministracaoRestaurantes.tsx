import { Link } from 'react-router-dom'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useAdministrarRestaurantes } from '@/hooks/useAdministrarRestaurantes'

const AdministracaoRestaurantes = () => {
    const { restaurantes, excluirRestaurante } = useAdministrarRestaurantes()

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Editar</TableCell>
                        <TableCell>Excluir</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurante => (
                        <TableRow key={restaurante.id}>
                            <TableCell>
                                {restaurante.nome}
                            </TableCell>
                            <TableCell>
                                [{' '}
                                <Link to={`/admin/restaurantes/${restaurante.id}`}>
                                    Editar
                                </Link>
                                {' '}]
                            </TableCell>
                            <TableCell>
                                <Button
                                    color="error"
                                    variant="outlined"
                                    onClick={() => excluirRestaurante(restaurante.id)}
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

export default AdministracaoRestaurantes