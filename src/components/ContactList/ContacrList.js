import React from "react";
import PropTypes from "prop-types";
import style from "./ContactList.module.css";

const ContactList = ({ contacts, removeContact }) => (
  <ul className={style.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={style.item}>
        {name}: {number}
        <button
          type="button"
          className={style.button}
          onClick={() => removeContact(id)}
        >
          Delete Contact
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
