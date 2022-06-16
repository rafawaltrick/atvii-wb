import { Routes,Route, Navigate } from "react-router-dom";
import ListaCliente from "../listaCliente";



export const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Navigate to="/" />} />
        </Routes>
    );
}


