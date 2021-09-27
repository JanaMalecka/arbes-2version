import React from 'react';
import { render } from 'react-dom';
import Form from './Form';
import './style.css';
import Table from './Table';

const App = () => (
  <>
    <section>
      <h1>Contact form</h1>
      <Form />
    </section>
    <section>
      <Table />
    </section>
  </>
);

render(<App />, document.querySelector('#app'));
