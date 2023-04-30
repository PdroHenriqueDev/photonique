import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  max-height: 95%;
  padding: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const DragDropContainer = styled.div`
  width: 100%;
  padding: 8px;
`;

export const FilesContainer = styled.div`
  width: 100%;
  max-height: 220px;
  padding-inline: 8px;
  overflow-y: auto;
`;

export const FileUploadContainer = styled.div`
  margin-top: 16px;
  width: 100%;
`;
