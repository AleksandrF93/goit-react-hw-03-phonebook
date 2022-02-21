import React from "react";
import PropTypes from 'prop-types';
import s from './ContactList.module.css'
export default function ContactsList({ contacts, onDeleteContact }) {
    return (
        <>
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <li key={id} >
                        <span>{name}:</span>
                        <span>{number}</span>
                        <button className={s.button} onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    onDeleteContact: PropTypes.func.isRequired
};