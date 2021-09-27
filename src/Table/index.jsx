import React, { useState } from 'react';
import './style.css';

const Table = ({ userName, surname, phone, comment }) => {
  return (
    <>
      <div>Table</div>
      <div>
        {userName} {surname} {phone} {comment}
      </div>
    </>
  );
};

export default Table;
