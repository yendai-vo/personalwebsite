import React, { Component } from 'react';
import Links from '../Components/Links';
import './Contact.css';
class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <h1 className="title">Contact</h1>
        <h4 className="email"><b>Email Adress:</b>&nbsp;&nbsp;yendai.vo@hotmail.com</h4>
        <h4 className="gitHub"><b>GitHub:</b>&nbsp;&nbsp;yendai-vo</h4>
        <Links />
      </div>
    )
  }
}

export default Contact;