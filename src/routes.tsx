import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import VitrineRestaurantes from '@/pages/VitrineRestaurantes'
import AdministracaoRestaurantes from '@/pages/Administracao/Restaurantes/AdministracaoRestaurantes'
import FormularioRestaurante from '@/pages/Administracao/Restaurantes/FormularioRestaurante'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurantes" element={<VitrineRestaurantes />} />
                <Route path="/admin/restaurantes">
                    <Route index element={<AdministracaoRestaurantes />} />
                    <Route path="novo" element={<FormularioRestaurante />} />
                    <Route path=":id" element={<FormularioRestaurante />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
