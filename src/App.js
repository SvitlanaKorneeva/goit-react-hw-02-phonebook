import React, { Component } from "react";
import "./App.css";
import PhoneBook from "./components/PhoneBook/PhoneBook"



class App extends Component {
state = {
  contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
  name: '',
    number: '',
}
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts]
    }))
  }
  
 
     
    render() {
  
      return (

        <PhoneBook onAddContact={this.addContact}  />
     
    );
  }
}

  
export default App;
