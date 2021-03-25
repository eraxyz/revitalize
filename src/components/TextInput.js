import React from 'react';
import { useField } from 'formik';
import { textInput, textArea, inputLabel, textInputContainer, error } from '../styles/form.module.css';

const TextInput = ({ label, variant='input', ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div className={textInputContainer}>
      <label htmlFor={props.id || props.name} className={inputLabel}>{label}</label>
      {variant === 'input'
        ? (
            <input className={textInput} {...field} {...props} />
          )
        : (
          <textarea className={textArea} {...field} {...props}/>
        )
      }
      {meta.touched && meta.error ? (
        <div className={error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput
