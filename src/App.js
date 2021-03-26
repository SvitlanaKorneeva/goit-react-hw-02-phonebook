import React, { Component } from "react";

import "./App.css";
import PhoneBook from "./components/PhoneBook/PhoneBook";
import Filter from "./components/Filter/Filter";
import { v4 as genId } from "uuid";

class App extends Component {
  state = {
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  
  addContact = () => {
   const { name, number } = this.state;
    const newContact = {genId, name, number}
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts]
    }))
  
}
  changeFilter = e => {
    this.setState({ filter: e.target.value })
    
  }
  
  getVisibleContacts = () => {
    const {filter, contacts} = this.state
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((elem) =>
    elem.name.toLowerCase().includes(normalizedFilter))

  }
  
  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts();
   
      return (
        <>
          <PhoneBook onAddContact={this.addContact} contacts={visibleContacts} />
          <Filter filter={filter} changeFilter={ this.changeFilter} />
</>
        
    );
  }
}

  
export default App;
