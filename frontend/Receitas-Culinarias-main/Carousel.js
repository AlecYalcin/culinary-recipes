import React from 'react';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"; // Importando o CSS do Bootstrap
import './Carousel.css';
import logo from './bife-a-parmegiana.jpg';
// Lista de receitas
const receitas = [
    { nome: 'Macarronada', estrelas: '5 estrelas ⭐', img: logo, link: '/pagina_receita_1' },
    { nome: 'Fígado', estrelas: '3,4 estrelas ⭐', img: logo, link: '/pagina_receita_2' },
    { nome: 'Strogonoff de Frango', estrelas: '4,8 estrelas ⭐', img: logo, link: '/pagina_receita_3' },
    { nome: 'Salada de Frutas', estrelas: '4,5 estrelas ⭐', img: logo, link: '/pagina_receita_4' },
    { nome: 'Sopa de Legumes', estrelas: '4,2 estrelas ⭐', img: logo, link: '/pagina_receita_5' },
    { nome: 'Bolo de Cenoura', estrelas: '5 estrelas ⭐', img: logo, link: '/pagina_receita_6' },
];

export default function FCarousel (props){
    return (
        <div className="container my-5">
            <h2 className="text-center title">{props.title}</h2>
            <Carousel interval={null} className='carrosel'>
                <Carousel.Item>
                    <div className="d-flex justify-content-around receitas">
                        {receitas.slice(0, 5).map((receita, index) => (
                            <a key={index} href={receita.link} style={{ textDecoration: 'none', color: 'black' }}>
                                <div className="text-center">
                                    <img className='foto-receita-carrosel'
                                        src={receita.img}
                                        alt={receita.nome}
                                        style={{ width: '200px', borderRadius: '10px' }}
                                    />
                                    <h5>{receita.nome}</h5>
                                    <p>{receita.estrelas}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-around">
                        {receitas.slice(3, 8).map((receita, index) => (
                            <a key={index} href={receita.link} style={{ textDecoration: 'none', color: 'black' }}>
                                <div className="text-center">
                                    <img
                                        src={receita.img}
                                        alt={receita.nome}
                                        style={{ width: '200px', borderRadius: '10px' }}
                                    />
                                    <h5>{receita.nome}</h5>
                                    <p>{receita.estrelas}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

