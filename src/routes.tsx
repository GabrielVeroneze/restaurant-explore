import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import VitrineRestaurantes from '@/pages/VitrineRestaurantes'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurantes" element={<VitrineRestaurantes />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
