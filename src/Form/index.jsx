import React, { useState } from 'react';
import './style.css';

const Form = (props) => {
  const [userName, setUserName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  return (
    <>
      <form>
        <label>Name: </label>
        <br />
        <input
          required
          onChange={(e) => setUserName(e.target.value)}
          name="name"
          type="name"
          value={props.userName}
        ></input>
        <br />
        <label>Surname: </label>
        <br />
        <input
          value={props.surname}
          type="text"
          name="lname"
          onChange={(e) => setSurname(e.target.value)}
        ></input>
        <br />
        <label>Phone number: </label>
        <br />
        <input
          value={props.phone}
          type="tel"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <br />
        <label>Comment: </label>
        <br />
        <textarea
          onChange={(e) => setComment(e.target.value)}
          name="comment"
          rows="5"
          cols="23"
          value={props.comment}
        ></textarea>
      </form>
      <hr />
    </>
  );
};

export default Form;
