import { Formik } from "formik";
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Form, FormField, Field, ErrorMessage, SubmitButton } from "./ContactForm.styled";
import PropTypes from 'prop-types';

const initialValues = {
  name: '',
  number: ''
}

const schema = yup.object().shape({
  name: yup.string().required('Required!'),
  number: yup.string().min(7).max(7).required('Required!'),
});

export const ContactForm =({onSave})=> {

  const handleSubmit = (values, {resetForm}) => {
    resetForm();
    onSave({
      id: nanoid(),
      ...values,
    })
  }

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      <Form>
          <FormField>
           Name <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="span"/>
          </FormField>
          <FormField>
              Number <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
          />
          <ErrorMessage name="number" component="span"/>
          </FormField>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Formik>
  );
}
  
ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
