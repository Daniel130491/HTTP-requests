import { Nav, NavLink } from "./styleNav";

export default function NavBar(){
    return(
        <>
            <Nav>
                <NavLink to="/">HOME</NavLink>
                <NavLink>CAFEÍNA</NavLink>
                <NavLink>CALORIAS</NavLink>
                <NavLink>METABOLISMO</NavLink>
                <NavLink>EXERCÍCIOS</NavLink>
                <NavLink>JEJUM</NavLink>
                <NavLink>PERDER PESO</NavLink>
            </Nav>
        </>
    )
}