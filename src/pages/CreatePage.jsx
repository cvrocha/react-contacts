import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
        <h1 className="title-header">Create Contacts</h1>
        <Link to="/"><button class="profile-card__button button--blue-dark">Home</button></Link>
        <form className="form-contato">
          <div className="flex-input">
            <label for="nome" className="profile-card__txt"><strong>Nome</strong></label>
            <input type="text" id="nome" name="nome" placeholder="Seu nome"/>
          </div>
          <div className="flex-input">
            <label for="telefone" className="profile-card__txt"><strong>Telefone</strong></label>
            <input type="text" id="telefone" name="telefone" placeholder="(21) 9999-9999"/>
          </div>
          <div className="flex-input col-2">
            <label for="email" className="profile-card__txt"><strong>Email</strong></label>
            <input type="email" id="email" name="email" placeholder="contato@email.com"/>
          </div>
          <div className="flex-input col-2">
            <label for="mensagem" className="profile-card__txt"><strong>Mensagem</strong></label>
            <textarea rows="5" id="mensagem" name="mensagem" placeholder="O que você precisa?"></textarea>
          </div>
          <button className="profile-card__button button--green"> Send </button>
        </form>
    </div>
  );
};

export default HomePage;
