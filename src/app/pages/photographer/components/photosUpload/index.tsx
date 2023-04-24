import { Container, ContentContainer, FileUploadContainer } from './styles';
import FileUpload from './components/fileUpload';
import FilesDragAndDrop from '@components/filesDragAndDrop';

function PhotosUpload() {
  return (
    <Container>
      <ContentContainer>
        <FilesDragAndDrop />

        <FileUploadContainer>
          <FileUpload />
        </FileUploadContainer>
      </ContentContainer>
    </Container>
  );
}

export default PhotosUpload;
