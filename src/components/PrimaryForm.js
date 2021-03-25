import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import SelectField from './SelectField';
import TextInput from './TextInput';
import Row from './Row';
import { inputFieldMargins, submitButton } from '../styles/form.module.css';

const PrimaryForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phoneNumber: '',
          propertyAddress: '',
          city: '',
          zip: '',
          occupancy: '',
          propertyType: '',
          repairs: '',
          askingPrice: '',
          communicationPreference: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          phoneNumber: Yup.string()
            .required('Required')
            .phone('US', false, 'Invalid US phone number'),
          propertyAddress: Yup.string()
            .required('Required'),
          city: Yup.string()
            .required('Required'),
          zip: Yup.string()
            .required('Required'),
          propertyType: Yup.string()
            .oneOf(
              ['single-family',
              'multifamily',
              'commercial',
              'mobile',
              'condo/townhouse',
              'land',
              'other'],
              'Invalid property type'
            )
            .required('Required'),
          occupancy: Yup.string()
            .oneOf(
              ['owner', 'tenant', 'vacant'],
              'Invalid occupancy'
            )
            .required('Required'),
          communicationPreference: Yup.string()
              .oneOf(
                ['call', 'text', 'email']
              )
              .required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Row className={inputFieldMargins}>
            <TextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Jane Doe"
            />

            <TextInput
              label="Phone Number"
              name="phoneNumber"
              type="phone"
              placeholder="555-555-5555"
            />
          </Row>

          <div className={inputFieldMargins}>
            <TextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane@gmail.com"
            />
          </div>

          <div className={inputFieldMargins}>
            <TextInput
              label="Property Address"
              name="propertyAddress"
              type="text"
              placeholder="123 Main St"
            />
          </div>

          <Row className={inputFieldMargins}>
            <TextInput
              label="City"
              name="city"
              type="text"
              placeholder="Phoenix"
            />

            <TextInput
              label="Zip Code"
              name="zip"
              type="text"
              placeholder="85034"
            />
          </Row>

          <Row>
            <SelectField label="Property Type" name="propertyType">
              <option value="">Please select...</option>
              <option value="single-family">Single Family</option>
              <option value="multifamily">Multi Family</option>
              <option value="mobile">Manufactured/Mobile</option>
              <option value="commercial">Commercial</option>
              <option value="condo/townhouse">Condo/Townhouse</option>
              <option value="land">Land</option>
              <option value="other">Other</option>
            </SelectField>

            <SelectField label="Occupancy" name="occupancy">
              <option value="">Please select...</option>
              <option value="owner">Owner</option>
              <option value="tenant">Tenant</option>
              <option value="vacant">Vacant</option>
            </SelectField>
          </Row>

          <div className={inputFieldMargins}>
            <TextInput
              variant="textArea"
              label="Repairs"
              name="repairs"
              type="text"
              placeholder="Please list any repairs needed here so that we can accurately provide you with our best estimate"
            />
          </div>

          <Row className={inputFieldMargins}>
            <TextInput
              label="Asking Price"
              name="askingPrice"
              type="text"
              placeholder="$"
            />

            <SelectField label="Communication Preference" name="communicationPreference">
              <option value="">Please select...</option>
              <option value="call">Call</option>
              <option value="text">Text/SMS</option>
              <option value="email">Email</option>
            </SelectField>
          </Row>

          <button className={submitButton} type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default PrimaryForm
