import { AppBar, Box, Button, Container, Link, Paper, Toolbar, Typography } from '@mui/material'
import { Outlet, Link as RouterLink } from 'react-router-dom'

const LayoutAdmin = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar sx={{ gap: 3 }}>
                        <Typography variant="h6">Administração</Typography>
                        <Box sx={{ width: '100%' }}>
                            <Link
                                component={RouterLink}
                                to="/admin/restaurantes"
                            >
                                <Button sx={{ color: 'white', my: 2 }}>
                                    Restaurantes
                                </Button>
                            </Link>
                            <Link
                                component={RouterLink}
                                to="/admin/restaurantes/novo"
                            >
                                <Button sx={{ color: 'white', my: 2 }}>
                                    Novo Restaurante
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box>
                <Container maxWidth="lg" sx={{ mt: 4 }}>
                    <Paper elevation={2} sx={{ p: 2 }}>
                        <Outlet />
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default LayoutAdmin