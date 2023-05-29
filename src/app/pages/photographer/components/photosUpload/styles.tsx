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
  padding-inline: 8px;
`;

export const TextContainer = styled.div`
  width: 100%;
  padding-inline: 8px;
  margin-top: 16px;
`;

export const Text = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.main};

  strong {
    color: ${({ theme }) => theme.colors.primary.light};
  }
`;

export const FilesContainer = styled.div`
  width: 100%;
  max-height: 220px;
  padding-inline: 8px;
  overflow-y: auto;
`;

export const FileUploadContainer = styled.div`
  margin-top: 8px;
  width: 100%;

  &.file-removed {
    opacity: 0;
    transition: opacity 0.3s ease;
    width: calc(100% - 2px);
  }
`;
