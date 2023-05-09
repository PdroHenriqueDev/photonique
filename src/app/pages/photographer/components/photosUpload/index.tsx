import {
  Container,
  ContentContainer,
  DragDropContainer,
  FilesContainer,
  FileUploadContainer,
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

  const handleFilesSelect = (filesSelected: File[]) => {
    onFilesSelect(filesSelected);
    setFilesSelected(filesSelected || files);
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = [...filesSelected];
    newFiles.splice(index, 1);
    setFilesSelected(newFiles);
  };

  return (
    <Container>
      <ContentContainer>
        <DragDropContainer>
          <FilesDragAndDrop onFilesSelect={handleFilesSelect} />
        </DragDropContainer>

        <FilesContainer>
          {filesSelected.map((_file, index) => (
            <FileUploadContainer key={index}>
              <FileUpload onRemove={() => handleRemoveFile(index)} />
            </FileUploadContainer>
          ))}
        </FilesContainer>
      </ContentContainer>
    </Container>
  );
}
