import styled from 'styled-components';

export const Main = styled.div`
    padding: 70px;
`
export const HeaderComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 3px 25px 2px;
`
export const Titulo = styled.h1`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    font-family: "SUSE", sans-serif;
    font-optical-sizing: auto;
    font-weight: normal;
    font-style: normal;
    font-size: 80px;
    color: #3AB54B;
    margin: 0;
    padding: 5px;

    > img {
        width: 70px;
        margin: 15px;
    }
`
