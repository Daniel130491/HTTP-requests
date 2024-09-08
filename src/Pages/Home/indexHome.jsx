import { useEffect, useState } from "react";
import { Botao, Imagem, Post, Subtitulo, Titulo } from "./styleHome";

export default function Home(){

const [nutri, setNutri] = useState([]);

useEffect(() => {
    function loadApi(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            setNutri(json);
        })
    }

    loadApi();
}, [])

    return(
        <>
            <Imagem/>
            {nutri.map((item) => {
                return(
                    <>
                        <Post key={item.id}>
                            <Titulo>{item.titulo}</Titulo>
                            <img src={item.capa} alt={item.titulo} className="capa"/>
                            <Subtitulo>
                                {item.subtitulo}
                            </Subtitulo>
                            <Botao>Acessar</Botao>
                        </Post>
                    </>
                )
            })}
        </>
    )
}