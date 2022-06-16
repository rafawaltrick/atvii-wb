import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./componentes/Routes";

export const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes /> 
        </BrowserRouter>
    );
}


