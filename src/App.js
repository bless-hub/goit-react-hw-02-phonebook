import React, { Component } from "react";
// import Form from "./components/Form";
import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContacrList";
// import createContact from "./components/createtContact";
import ContactForm from "./components/ContactForm/ContactForm";
import { v4 as uuid } from "uuid";
import Filter from "./components/Filter/Filter";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("submi");
  // };
  addContact = ({ name, number }) => {
    // const contact = createContact();
    // console.log(contact);

    const contact = {
      id: uuid(),
      name,
      number,
    };

    const { contacts } = this.state;

    this.setState((prevState) => {
      return {
        contacts: [contact, ...prevState.contacts],
      };
    });

    const sameContact = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (sameContact) {
      alert(`${name} is already in contact.`);
      return;
    }
  };

  getFilter = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleFilter = this.getFilter();

    return (
      <>
        <Container title="PhoneBook">
          <ContactForm addContact={this.addContact} />
        </Container>
        <Container title="Contacts">
          <Filter
            title="Find"
            value={filter}
            onChangeFilter={this.changeFilter}
          />
          {contacts.length > 0 && (
            <ContactList
              contacts={visibleFilter}
              removeContact={this.removeContact}
            />
          )}
        </Container>
      </>
    );
  }
}
