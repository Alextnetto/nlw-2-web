import React from 'react';

import whatsLogo from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/56097505?s=460&u=287ff8cc98b046f4ecaa578b5e0ce95d803e3ebe&v=4" alt="Alexadro T. Netto"/>
        <div>
          <strong>Alexandro T. Netto</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Descrição e 
        <br/><br/>
        talz
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$50.00</strong>
        </p>
        <button type="button">
          <img src={whatsLogo} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem