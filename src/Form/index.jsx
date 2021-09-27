import React, { useState } from 'react';
import './style.css';
import Table from '../Table';

const Form = (props) => {
  const [userName, setUserName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*  console.log(`${userName} ${surname} ${phone} ${comment}`); */
    setUserName(e.target.value);
    setSurname(e.target.value);
    setPhone(e.target.value);
    setComment(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
          required
          value={props.surname}
          type="text"
          name="lname"
          onChange={(e) => setSurname(e.target.value)}
        ></input>
        <br />
        <label>Phone number: </label>
        <br />
        <input
          required
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
        <br />
        <button
          disabled={!userName || !surname || !phone}
          onClick={handleSubmit}
          className="btn"
          type="submit"
        >
          Submit
        </button>
      </form>
      <hr />
      <section>
        <Table
          userName={userName}
          surname={surname}
          phone={phone}
          comment={comment}
        />
      </section>
    </>
  );
};

export default Form;
