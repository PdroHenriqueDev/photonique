import PhotoIcon from '@mui/icons-material/Photo';
import LinearBuffer from '@components/linearBuffer';
import CloseIcon from '@mui/icons-material/Close';
import {
  Container,
  ContentContainer,
  FileNameText,
  FileSizeText,
} from './styles';

function FileUpload() {
  return (
    <Container>
      <PhotoIcon fontSize="large" className="photo-icon" />
      <ContentContainer>
        <FileNameText>nome do arquivo</FileNameText>
        <LinearBuffer />
        <FileSizeText>12.4 de 15.2MB</FileSizeText>
      </ContentContainer>
      <CloseIcon className="close-icon" />
    </Container>
  );
}

export default FileUpload;
