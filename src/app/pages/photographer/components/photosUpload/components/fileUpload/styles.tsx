import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 4px;

  .photo-icon {
    height: 100%;
    width: 50px;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  .close-icon {
    cursor: pointer;
    width: 15px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  /* border: 1px solid red; */
`;

export const FileNameText = styled.span`
  font-size: 12px;
`;

export const FileSizeText = styled.span`
  font-size: 10px;
`;
