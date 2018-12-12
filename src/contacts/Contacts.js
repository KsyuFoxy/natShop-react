import React, { Component } from 'react';
import './Contacts.scss';
import emailIcon from '../assets/img/email.svg';
import phoneIcon from '../assets/img/phone.svg';

class Contacts extends React.Component {
  render() {
    return (
      <div>
        <h2>Контактная информация</h2>
        <div className="divider"></div>
        <div className="contacts-box">
          <p className="contacts-text">Если у вас есть какие-либо вопросы, пожелания, идеи который вы хотите воплотить в декоре,
              пожалуйста обращайтесь по контактам ниже.</p>
          <div className="contacts">
            <p className="phone">
              <img src={phoneIcon} alt=""></img>
              123-111-111-111
            </p>
            <a className="email" href="mailto:NatShop@ukr.net?Subject=Handmade%20request" target="_top">
              <img src={emailIcon} alt=""></img>
              Отправить письмо
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
