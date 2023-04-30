import {
  Container,
  ContentContainer,
  DragDropContainer,
  FilesContainer,
  FileUploadContainer,
} from './styles';
import FileUpload from './components/fileUpload';
import FilesDragAndDrop from '@components/filesDragAndDrop';
import { useState } from 'react';

function PhotosUpload() {
  const [files, setFiles] = useState([]);

  const onFilesSelect = (files: any) => {
    setFiles(files);
  };

  return (
    <Container>
      <ContentContainer>
        <DragDropContainer>
          <FilesDragAndDrop onFilesSelect={onFilesSelect} />
        </DragDropContainer>

        <FilesContainer>
          {files.map((_file, index) => (
            <FileUploadContainer key={index}>
              <FileUpload />
            </FileUploadContainer>
          ))}
        </FilesContainer>
      </ContentContainer>
    </Container>
  );
}

export default PhotosUpload;
