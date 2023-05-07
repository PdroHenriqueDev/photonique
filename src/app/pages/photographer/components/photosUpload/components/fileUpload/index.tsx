import PhotoIcon from '@mui/icons-material/Photo';
import LinearBuffer from '@components/linearBuffer';
import CloseIcon from '@mui/icons-material/Close';
import {
  Container,
  ContentContainer,
  FileNameText,
  FileSizeText,
} from './styles';
import { FileUploadProps } from 'app/models/components/fileUpload.model';

function FileUpload({ isSubmitting = false }: FileUploadProps) {
  return (
    <Container>
      <PhotoIcon fontSize="large" className="photo-icon" />
      <ContentContainer isSubmitting={isSubmitting}>
        <FileNameText>nome do arquivo</FileNameText>
        {isSubmitting && <LinearBuffer />}
        {isSubmitting && <FileSizeText>12.4 de 15.2MB</FileSizeText>}
        {!isSubmitting && <FileSizeText>15.2MB</FileSizeText>}
      </ContentContainer>
      <CloseIcon className="close-icon" />
    </Container>
  );
}

export default FileUpload;
