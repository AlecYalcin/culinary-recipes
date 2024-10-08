import React, { useState } from 'react';
import logo from './logo_projeto.png';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import equipe from './equipe.png';
import './Sobre.css';
import cozinhando from './cozinhando.jpeg'


export default function Sobre(){
    return(
        <div class='d-flex justify-content-evenly p-3 m-3'>
            <div class="um">
                <img src={equipe}></img>
            </div>
            <div class="dois" >
                <h6>No campus Caicó do Instituto Federal do Rio Grande do Norte, quatro alunas do curso de Informática se destacam por sua criatividade e determinação: Ana Júlia, Laísla, Francilânia e Emily.
                    <p>Juntas, elas uniram forças para desenvolver um projeto que promete transformar a forma como compartilhamos receitas e experiências culinárias: o site "Cozinha em Bytes".</p>
                    <p>Com a conclusão do projeto, Ana Júlia, Laísla, Francilânia e Emily esperam inspirar outros alunos a explorar suas habilidades e a desenvolver iniciativas que façam a diferença. </p>
                    <p>O "Cozinha em Bytes" já está disponível para o público e promete ser uma fonte de inspiração para cozinheiros de todos os níveis. </p>
                </h6>
            </div>
        </div>
        
    );
}
