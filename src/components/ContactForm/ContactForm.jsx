import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ handleAddContact }) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    handleAddContact({
      id: crypto.randomUUID(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.form_item}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={s.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage
            name="name"
            component="span"
            className={s.form_item_error}
          />
        </div>

        <div className={s.form_item}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={s.field}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={s.form_item_error}
          />
        </div>

        <button className={s.form_btn_submit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
