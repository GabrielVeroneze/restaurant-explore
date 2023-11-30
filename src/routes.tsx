import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import VitrineRestaurantes from '@/pages/VitrineRestaurantes'
import AdministracaoRestaurantes from '@/pages/Administracao/Restaurantes/AdministracaoRestaurantes'
import FormularioRestaurante from '@/pages/Administracao/Restaurantes/FormularioRestaurante'
import LayoutAdmin from '@/components/LayoutAdmin'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurantes" element={<VitrineRestaurantes />} />
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route path="restaurantes" element={<AdministracaoRestaurantes />} />
                    <Route path="restaurantes/novo" element={<FormularioRestaurante />} />
                    <Route path="restaurantes/:id" element={<FormularioRestaurante />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
