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

export default function FileUpload({
  isSubmitting = false,
  onRemove,
  file,
  progress,
}: FileUploadProps) {
  const handleRemoveClick = () => {
    onRemove();
  };

  const { name, size } = file;

  const bytesToMB = (bytes: number) => {
    return (bytes / (1024 * 1024)).toFixed(2);
  };

  return (
    <Container>
      <PhotoIcon fontSize="large" className="photo-icon" />
      <ContentContainer isSubmitting={isSubmitting}>
        <FileNameText>{name}</FileNameText>
        {(isSubmitting || progress === 100) && (
          <LinearBuffer progress={progress} />
        )}
        <FileSizeText>{bytesToMB(size)}MB</FileSizeText>
      </ContentContainer>
      <CloseIcon className="close-icon" onClick={handleRemoveClick} />
    </Container>
  );
}
