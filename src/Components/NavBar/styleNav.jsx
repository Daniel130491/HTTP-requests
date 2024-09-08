import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding: 10px;
`
export const NavLink = styled(Link)`
    margin: 15px;
    padding: 15px;
    font-family: "SUSE", sans-serif;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;
    color: #3AB54B;
    text-decoration: none;

    &:hover{
        background-color: #EAECEE ;
    }
`
