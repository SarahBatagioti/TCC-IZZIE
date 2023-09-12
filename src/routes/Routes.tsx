import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Sobre from '../pages/Sobre'

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Inicio />} />
                <Route path="/" element={<Inicio />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}