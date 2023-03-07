import styled from '@emotion/styled';

export const ContactCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
`;

export const DeleteButton = styled.button`
  width: 80px;
  border: 1px solid #cfcfd0;
  border-radius: 4px;
  &:hover,
  :focus {
    background-color: #7fadf7;
    color: #f4f6f9;
  }
`;
