import React, { useState } from 'react';

import styles from "./input.module.css"

function Input({name}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      className={styles.input}
      type='text'
      value={inputValue}
      placeholder={name}
      onChange={handleInputChange}
    />
  );
}

export default Input;