import React, { useState } from 'react';
import logo from './logo_projeto.png';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top">
                <div className="container">
                    <MenuIcon />
                    <a className="position-absolute top-50 start-50 translate-middle" href="#">
                        <img src={logo} alt="Cozinha em Bytes" id="logo" />
                    </a>
                    <div id="right-navbar">
                        <div className="item">
                            <button type="button" className="btn btn-primary btn-g botao_receita">
                                <b>Publique sua receita</b>
                            </button>
                        </div>
                        <div className="item">
                            <i className="bi bi-person-circle fs-1"></i>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='search-container'>
                <div className='form-container'>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Procurando algo específico?" aria-label="Search"/>
                        <button className="btn btn-outline-success btn-search" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </div>
        
    );
}

// Componente MenuIcon
// function MenuIcon() {
//     return (
        
//     );
// }

function MenuIcon(){
    const [clique, setClique] = useState(false);

    const menu = () => {
        setClique(!clique); // alter entre verdadeiro e falso
    }

    return(
        <div>   
        {/* // isso qui monta as 3 barrinhas laranjas */}
            <div className="menu-icon " onClick={menu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={`menu-content dropdown-menu ${clique ? 'show' : 'hide'}`} >
                <ul className="list-unstyled lista">
                    <li><a className="dropdown-item" href="#">Contate-nos</a></li>
                    <li><a className="dropdown-item" href="#">Sobre</a></li>
                </ul>
            </div>
        </div>
        
    );
}

