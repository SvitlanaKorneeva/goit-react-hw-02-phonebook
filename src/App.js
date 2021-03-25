import React, { Component } from "react";
import "./App.css";
import PhoneBook from "./components/PhoneBook/PhoneBook"



class App extends Component {
  state = {}
  

  // addContact = newContact => {
  //   this.setState(prevState => ({
  //     contacts: [newContact, ...prevState.contacts]
  //   }))
  // }
  

  
    render() {
  
      return (

        <PhoneBook />
     
    );
  }
}

  
export default App;
