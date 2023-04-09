import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  /* border: 1px solid red; */
`;

export const Form = styled.form``;

export const FormRow = styled.div`
  margin-top: 16px;
  width: 100%;
`;
