import styled from "styled-components";
import Fundo from "../../Assets/Images/salad.jpg"

export const Imagem = styled.div`
    background-image: url(${Fundo});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 750px;
    margin: 0 auto;
`
export const Post = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    background-color: #fff;
    border-radius: 7px;
    border-width: 1px;
    margin: 150px auto;
    padding: 10px;
`
export const Titulo = styled.div`
    margin: 15px;
    padding: 15px;
    font-family: "SUSE", sans-serif;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;
    font-size: 40px;
    color: #221f1fd3;
`
export const Subtitulo = styled.div`
    margin: 35px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
`
export const Botao = styled.button`
    height: 40px;
    background: none;
    border-radius: 5px;
    color: #3AB54B;
    border: 1px solid #3AB54B;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;

    &:hover{
        background-color: #3AB54B;
        color: #F80302;
    }
`
