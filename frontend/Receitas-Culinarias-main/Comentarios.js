import React from 'react';
import './Comentarios.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Comentario() {
    const comentarios = [
        { nome: 'Ana Júlia', estrelas: '4 estrelas ⭐', texto: 'Receita to de verdade, mas não gostei do limão, prefiro sem', data: '05/10/2024' },
        { nome: 'Laísla Brandão', estrelas: '4 estrelas ⭐', texto: 'faltou sal', data: '05/10/2024' },
        { nome: 'Emily Nogueira', estrelas: '4 estrelas ⭐', texto: 'pfvr nao sufoque a programadora', data: '05/10/2024' },
        { nome: 'Francilânia Araújo', estrelas: '4 estrelas ⭐', texto: 'viva a vida', data: '05/10/2024' }
    ];

    return (
        <div className='container-comentario'>
            <div className='comentario-ind'>
                <h2>Comentários</h2>
            </div>
            <div id="total-comentarios">
                <p>{comentarios.length} comentários</p>
            </div>
            <hr />
            {comentarios.map((comentario, index) => (
                <div className='body-coment' key={index}>
                    <div id='user'>
                        <i className="bi bi-person-circle"></i>
                        <p>{comentario.nome}</p>
                    </div>
                    <p>{comentario.texto}</p>
                    <div className="date">{comentario.data}</div>
                </div>
            ))}
        </div>
    );
}
