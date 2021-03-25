import React, { Component } from "react";
import { unstable_concurrentAct } from "react-dom/test-utils";
import "./App.css";
import PhoneBook from "./components/PhoneBook/PhoneBook";
import Filter from "./components/Filter/Filter";



class App extends Component {
  state = {
        filter: '',
  }
  

  // addContact = text => {
  //   const newContact = { name:"", number:"" }
  //   // const { name, number } = this.state;
  //   this.setState(prevState => ({
  //     contacts: [newContact, ...prevState.contacts]
  //   }))
  // }
  
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
    
  }
  
  getVisibleContacts = () => {
    const {filter, contacts} = this.state
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contacts) =>
    contacts.name.toLowerCase().includes(normalizedFilter))

  }
  
  render() {
    const { filter } = this.state

    const visibleContacts = this.getVisibleContacts();
    
      return (
        
        <>
          <PhoneBook onAddContact={this.addContact} visibleContacts={ visibleContacts}/>
          <Filter value={filter} onChange={ this.changeFilter}/>
</>
        
    );
  }
}

  
export default App;
