import React, { useState } from 'react';

import styles from "./input.module.css"

function Input({name, textAling}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      style={{textAlign: textAling}}
      className={styles.input}
      type='text'
      value={inputValue}
      placeholder={name}
      onChange={handleInputChange}
    />
  );
}

export default Input;