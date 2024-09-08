import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/indexHeader";
import GlobalStyles from "../style"
import Home from "../Pages/Home/indexHome";

export default function Rotas(){

    return(
        <BrowserRouter>
            <Header/>
            <GlobalStyles/>
            <Routes>
                <Route path="/" Component={Home} />
            </Routes>
        </BrowserRouter>
    )
}