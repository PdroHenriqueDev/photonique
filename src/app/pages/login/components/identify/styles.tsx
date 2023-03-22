import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  button {
    background-color: ${({ theme }) => theme.colors.primary.light};
    height: 70px;
    font-size: 30px;
    font-weight: 750;
  }

  button + button {
    background-color: ${({ theme }) => theme.colors.primary.main};
    margin-top: 20px;
  }
`
