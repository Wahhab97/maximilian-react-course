import React from "react";

const FormControl = ({ text, id, type, value, setState }) => {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <p>
      <label htmlFor={id}>{text}</label>
      <input value={value} onChange={handleChange} type={type} id={id} />
    </p>
  );
};

export default FormControl;
