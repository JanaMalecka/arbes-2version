import React from 'react';
import { render } from 'react-dom';
import Form from './Form';
import './style.css';
import Table from './Table';

const App = () => (
  <>
    <section>
      <h1>Add New Contact</h1>
      <Form />
    </section>
  </>
);

render(<App />, document.querySelector('#app'));
