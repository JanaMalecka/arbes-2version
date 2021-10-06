import React, { useState } from 'react';
import './style.css';
/* import Table from '../Table'; */
/*import DataTable from 'react-data-table-component';*/
import validator from 'validator';

const initialState = {
  name: '',
  surname: '',
  phone: '',
  comment: '',
  phoneError: '',
};

const Form = () => {
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    initialState,
  });

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const validate = () => {
    let phoneError = '';

    if (this.state.phone.length !== 9 || this.state.phone.length !== 12) {
      phoneError = 'invalid phone number';
    }

    if (phoneError) {
      this.setState({ phoneError });
      return false;
    }
    return true;
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      /*  id:  */
      name: addFormData.name,
      surname: addFormData.surname,
      phone: addFormData.phone,
      comment: addFormData.comment,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form
      this.setState(initialState);
    }
  };

  return (
    <>
      <form onSubmit={handleAddFormSubmit}>
        <label>Name: </label>

        <br />
        <input
          required="required"
          onChange={handleAddFormChange}
          name="name"
          type="text"
        ></input>

        <br />
        <label>Surname: </label>
        <br />
        <input
          required="required"
          type="text"
          name="surname"
          onChange={handleAddFormChange}
        ></input>
        <br />
        <label>Phone number: </label>
        <br />
        <input
          required="required"
          type="tel"
          name="phone"
          onChange={handleAddFormChange}
        ></input>
        {this.state.phoneError ? (
          <div style={{ fontSize: 12, color: 'red' }}>
            {this.state.phoneError}
          </div>
        ) : null}
        <br />
        <label>Comment: </label>
        <br />
        <textarea
          onChange={handleAddFormChange}
          name="comment"
          rows="5"
          cols="23"
        ></textarea>
        <br />
        <button onSubmit={handleAddFormSubmit} className="btn" type="submit">
          Add
        </button>
      </form>
      <hr />
      <section>
        <div className="app-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr>
                  <td>
                    {contact.surname
                      .toUpperCase()
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')}
                    _
                    {contact.name
                      .toUpperCase()
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')}
                  </td>
                  <td>{`${contact.name} ${contact.surname}`}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Form;
