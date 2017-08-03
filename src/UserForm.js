import React from 'react'
import { Field, reduxForm } from 'redux-form'


const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const maxLength10 = maxLength(10)
const minLength10 = maxLength(10)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined



const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error &&
          <span>
            {error}
          </span>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
    </div>
  </div>



let UserForm = props => {
  
  return (
    <form onSubmit={ props.handleSubmit }>
      
      <div>
        <Field name="name" 
               component="input" 
               type="text"  
               component={renderField}
               label="Name"
               validate={[required, maxLength15, minLength2]}
        />
      </div>

      <div>
        <Field name="phone" 
               component="input" 
               type="text" 
               component={renderField}
               label="Phone Number" 
               validate={[required, maxLength10, minLength10, phoneNumber]} 
        />
      </div>

      <div>
        <Field name="email" 
               component="input" 
               type="email" 
               component={renderField}
               label="Email" 
               validate={[required, email]} 
        />
      </div>
     
      <button type="submit">Submit</button>
    </form>
  )
}

UserForm = reduxForm({
  // a unique name for the form
  form: 'user'
})(UserForm)

export default UserForm;