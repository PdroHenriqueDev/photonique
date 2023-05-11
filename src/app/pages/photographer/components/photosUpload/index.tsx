import {
  Container,
  ContentContainer,
  DragDropContainer,
  FilesContainer,
  FileUploadContainer,
  TextContainer,
  Text,
} from './styles';
import FileUpload from './components/fileUpload';
import FilesDragAndDrop from '@components/filesDragAndDrop';
import { PhotosUploadProps } from 'app/models/components/photosUpload.mode';
import { useState } from 'react';

export default function PhotosUpload({
  files = [],
  onFilesSelect,
}: PhotosUploadProps) {
  const [filesSelected, setFilesSelected] = useState<File[]>([]);

  const filesList = files || filesSelected;
  const total = filesList.length || null;

  const handleFilesSelect = (filesSelected: File[]) => {
    onFilesSelect(filesSelected);
    setFilesSelected(filesSelected || files);
  };

  const handleRemoveFile = (fileRemoved: File) => {
    const newFiles = [...filesList].filter((file) => file !== fileRemoved);
    handleFilesSelect(newFiles);
  };

  return (
    <Container>
      <ContentContainer>
        <DragDropContainer>
          <FilesDragAndDrop onFilesSelect={handleFilesSelect} />
        </DragDropContainer>

        {total && (
          <TextContainer>
            <Text>
              Total: <strong>{total}</strong>
            </Text>
          </TextContainer>
        )}

        <FilesContainer>
          {filesList.map((file, index) => (
            <FileUploadContainer key={index}>
              <FileUpload file={file} onRemove={() => handleRemoveFile(file)} />
            </FileUploadContainer>
          ))}
        </FilesContainer>
      </ContentContainer>
    </Container>
  );
}
