import React, { useState } from 'react';
import './style.css';
/* import Table from '../Table'; */
/*import DataTable from 'react-data-table-component';*/

const Form = () => {
  const [contacts, setContacts] = useState('');
  const [addFormData, setAddFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    comment: '',
  });

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
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
        <button
          /*  onClick={handleSubmit} */
          className="btn"
          type="submit"
        >
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
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Form;
