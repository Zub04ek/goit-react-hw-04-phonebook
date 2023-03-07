import styled from '@emotion/styled';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 360px;
  padding: 12px;
  border: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 500;
`;

export const Field = styled(FormikField)`
  border: 1px solid #cfcfd0;
  border-radius: 4px;
  &:hover,
  :focus {
    border-color: #7fadf7;
    outline: 1px solid #7fadf7;
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;

export const SubmitButton = styled.button`
  width: 200px;
  border: 1px solid #cfcfd0;
  border-radius: 4px;
  padding: 2px 6px;
  &:hover,
  :focus {
    background-color: #7fadf7;
    color: #f4f6f9;
  }
`;
