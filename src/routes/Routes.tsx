import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Sobre from '../pages/Sobre'
import PopUp from '../components/PopUp'

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Inicio />} />
                <Route path="/" element={<Inicio />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/popup" element={<PopUp />} />
            </Routes>
        </BrowserRouter>
    )
}