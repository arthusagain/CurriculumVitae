﻿const docHeader = document.querySelector("header");
const docFooter = document.querySelector("footer");
docHeader.innerHTML = `
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light mb-0 bg-primary box-shadow navbar__main">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">Árthus James Erthal</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                                <a class="nav-link" href="projetos.html">Projetos</a>
                            
                        </li>
                        <li class="nav-item">
                                <a class="nav-link" href="curriculos.html">Curriculos</a>
                            
                        </li>
                        <li class="nav-item">
                                <a class="nav-link" href="sobre.html">Sobre</a>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
`

docFooter.innerHTML = `
<div class="container">
            &copy; 2024 - Árthus James Erthal
        </div>
`

