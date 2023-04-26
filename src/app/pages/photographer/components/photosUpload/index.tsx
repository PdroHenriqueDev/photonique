import { Container, ContentContainer, FileUploadContainer } from './styles';
import FileUpload from './components/fileUpload';
import FilesDragAndDrop from '@components/filesDragAndDrop';
import { useState } from 'react';

function PhotosUpload() {
  const [files, setFiles] = useState([]);

  const onFilesSelect = (files: any) => {
    console.log('got here in onFilesSelect', files);
    setFiles(files);
  };

  return (
    <Container>
      <ContentContainer>
        <FilesDragAndDrop onFilesSelect={onFilesSelect} />

        {files.map((_file, index) => (
          <FileUploadContainer key={index}>
            <FileUpload />
          </FileUploadContainer>
        ))}
      </ContentContainer>
    </Container>
  );
}

export default PhotosUpload;
