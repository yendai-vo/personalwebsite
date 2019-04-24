import React, { Component } from 'react';
import Links from '../Components/Links';
import './Contact.css';
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1>Contact</h1>
        <h4>Email Adress</h4>
        <h4>Phone Number</h4>
        <Links />
      </div>
    )
  }
}

export default Contact;