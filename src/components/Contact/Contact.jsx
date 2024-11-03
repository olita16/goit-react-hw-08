import React from "react";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <li className={css.contactListItem}>
      <div className={css.container}>
        <div>
          <div className={css.username}>
            <FaUser size="20" />
            <p>{name}</p>
          </div>
          <div className={css.phone}>
            <FaPhoneAlt size="20" />
            <p>{number}</p>
          </div>
        </div>
        <button
          type="button"
          className={css.deleteButton}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Contact;
