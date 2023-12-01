import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import VitrineRestaurantes from '@/pages/VitrineRestaurantes'
import AdministracaoRestaurantes from '@/pages/Administracao/Restaurantes/AdministracaoRestaurantes'
import FormularioRestaurante from '@/pages/Administracao/Restaurantes/FormularioRestaurante'
import AdministracaoPratos from '@/pages/Administracao/Pratos/AdministracaoPratos'
import FormularioPrato from '@/pages/Administracao/Pratos/FormularioPrato'
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
                    <Route path="pratos" element={<AdministracaoPratos />} />
                    <Route path="pratos/novo" element={<FormularioPrato />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
