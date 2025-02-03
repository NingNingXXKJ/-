import React, { useState } from 'react';


const UseStateExample = () => {

  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
