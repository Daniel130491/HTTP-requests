import NavBar from "../NavBar/indexNav";
import { HeaderComponent, Main, Titulo } from "./styleHeader";
import Logo from '../../Assets/Images/logo.png'

export default function Header(){
    return(
        <>
            <Main>
                <HeaderComponent>
                    <Titulo><img src={Logo} alt="logo"/>React Nutri</Titulo>
                    <NavBar/>
                </HeaderComponent>
            </Main>
        </>
    )
}