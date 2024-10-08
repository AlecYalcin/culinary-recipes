import React from 'react';
import './TopicoReceitas.css';
import logo from './bife-a-parmegiana.jpg';

export default function TopicoReceita(props) {
    return (
        <div>
            <div className='cabeça'>
                <h1 className="titulo-receita-ind">{props.title}</h1>
                <div className="informacoes-receita-ind">
                    <div id="avaliacao">
                        <p id="estrelas" style={{ paddingRight: '5px' }}>
                            ⭐⭐⭐⭐ <b>4/5 estrelas</b>
                        </p>
                        <p id="comentario">(2 avaliações)</p>
                    </div>
                    <p className="t1-preparo">
                        <b>Tempo de preparo: </b>
                        <b id="t2-preparo">{props.tempo}</b>
                    </p>
                    <button type="button" className="btn btn-primary btn-g botao_receita">
                        <b>Avalie ☆</b>
                    </button>
                </div>
            </div>
            <div className='imagem-receita-ind'>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={logo} className="d-block w-100" alt="torta salgada"/>
                        </div>
                        <div className="carousel-item">
                            <img src={logo} className="d-block w-100" alt="torta salgada"/>
                        </div>
                        <div className="carousel-item">
                            <img src={logo} className="d-block w-100" alt="torta salgada"/>
                        </div>
                    </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                </div>
                <p className='publicacao'>publicado por {props.nome} em 03/10/2024</p>
            </div>
            <div className='instrucao'>
                <div className='passo-a-passo'>
                    <h2>Ingredientes</h2>
                    <ul className='ingredientes'>
                        <li>3 ovos</li>
                        <li>5 colheres de manteiga</li>
                        <li>Batata palha</li>
                        <li>Limão assado</li>
                    </ul>
                </div>
                <div className='passo-a-passo'>
                    <h2 id='preparo'>Modo de preparo</h2>
                    <ul>
                        <li className='preparo'> 1 - peneire bem os ovos para que o cheiro de ovo nao esteja na receita</li>
                        <li className='preparo'>2 - asse o limao em uma frigideira junto com 5 dentes de alho</li>
                        <li className='preparo'> 3 - recheie com a Batata palha</li>
                        <li className='preparo'> 4- adicione Limão assado a gosto</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
