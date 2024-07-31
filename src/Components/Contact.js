
import React, { useState } from 'react';
import './Contact.css'

const Contact = () => {
  const [firstData, setFirstData] = useState({
    name: '',
    email: '',
    mobileNumber:'',
    message: ''
  });

  const handler = (e) => {
    const { name, value } = e.target;
    setFirstData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    
    console.log(firstData);
  
    setFirstData({
      name: '',
      email: '',
      mobileNumber:'',
      message: ''
    });
  };

  return (
    <body className='f'>
    <center>
    <form id='f1' onSubmit={handlerSubmit}>
      <h1 >contact us</h1>
      <div>
        <label html="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={firstData.name}
          onChange={handler}
          required
        />
      </div>
      <div>
        <label html="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={firstData.email}
          onChange={handler}
          required
        />
      </div>
      <div>
        <label html="mobileNumber">MobileNumber:</label>
        <input
          type="mobileNumber"
          id="mobileNumber"
          name="mobileNumber"
          value={firstData.mobileNumber}
          onChange={handler}
          required
        />
      </div>
      <div>
        <label html="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={firstData.message}
          onChange={handler}
          rows={4}
          required
        />
      </div>
      
      <button type="submit"className='ex'>Submit</button>
      
    </form>
    </center>
    </body>
  );
};

export default Contact;
