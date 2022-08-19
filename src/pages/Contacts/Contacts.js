import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import './Contacts.css';

const Contacts = () => {
  return (
    <div className='contact'>
      <Header/>
      <form className='contact_form'>
        <select name="assunto" id="assunto">
          <option value="" >Selecione...</option>
          <option value="">Dúvidas</option>
          <option value="">Orçamentos</option>
          <option value="">Convites CLT</option>
          <option value="">Convites PJ</option>
          <option value="">Outros assuntos</option>
          <option value="">Global Contact</option>
        </select>
        <input type="email" placeholder='Email' required/>
        <input type= "text" placeholder='Whatsapp'/>
        <textarea name="textarea" id="" cols="30" rows="30" placeholder='Deixe sua mensagem...'></textarea>
      </form>
      <div>Whatsapp com icon pra entrar em contato direto comigo no whats web ou celular mesmo</div>
      <Footer/>
    </div>
  )
}

export default Contacts