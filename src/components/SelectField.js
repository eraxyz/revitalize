import React from 'react';
import { useField } from 'formik';
import { selectInput, inputLabel, textInputContainer, error } from '../styles/form.module.css';

const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={textInputContainer}>
      <label className={inputLabel} htmlFor={props.id || props.name}>{label}</label>
      <select className={selectInput} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SelectField