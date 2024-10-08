import React, { useState } from 'react';
import './Sobre.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import cozinhando from './cozinhando.jpeg'

export default function Meio(){
    return(
        <div class='d-flex justify-content-evenly p-3 m-3'>
            <div class="dois">
                <h6>A culinária desempenha um papel fundamental na vida humana, transcendendo a mera necessidade de se alimentar.
                    <p>Ela é uma arte, uma ciência e uma expressão cultural que reflete a identidade e as tradições de diferentes sociedades ao redor do mundo.</p>
                    <p>Do ponto de vista da saúde, a culinária também desempenha um papel crucial. A escolha dos ingredientes e a forma de preparo influenciam diretamente na qualidade da alimentação.</p>
                    <p>Cozinhar em casa permite que as pessoas tenham maior controle sobre o que consomem, promovendo uma dieta mais equilibrada e saudável. </p>
                    <p>Além disso, a culinária saudável pode ajudar na prevenção de doenças e na promoção do bem-estar.</p>
                </h6>
            </div>
            <div class="um" >
            <img src={cozinhando}></img>
            </div>
        </div>
        
    );
}
