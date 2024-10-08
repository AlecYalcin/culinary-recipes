import React from 'react';
import './Rodape.css';


export default function Rodape(){
    return(
        <div className='rodape'>
            <div className='informacoes'>
                <h3 className='problema'>
                    Algum problema?
                </h3>
                <div className='contato'>
                    <h5>Contate-nos:</h5>
                    <p>equipe.desenvolvedora@gmail.com</p>
                </div>
            </div>
        </div>
    );
}