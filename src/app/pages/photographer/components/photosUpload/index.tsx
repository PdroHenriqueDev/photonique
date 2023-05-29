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
import {
  PhotoProps,
  PhotosUploadProps,
} from 'app/models/components/photosUpload.mode';
import { useState } from 'react';
import { delay } from 'app/utils/delay';

export default function PhotosUpload({
  photos = [],
  onFilesSelect,
  isSubmitting = false,
}: PhotosUploadProps) {
  const [filesSelected, setFilesSelected] = useState<PhotoProps[]>([]);
  const [removedFiles, setRemovedFiles] = useState<PhotoProps[]>([]);

  const photosList = filesSelected.length > 0 ? filesSelected : photos;
  const total = photosList.length || null;

  const handleFilesSelect = (photosSelected: PhotoProps[]) => {
    onFilesSelect(photosSelected);
    setFilesSelected(photosSelected || photos);
  };

  const handleRemoveFile = async (fileRemoved: PhotoProps) => {
    setRemovedFiles((prevRemovedFiles) => [...prevRemovedFiles, fileRemoved]);
    await delay(250);
    const newFiles = photosList.filter((file) => file !== fileRemoved);
    handleFilesSelect(newFiles);
  };

  const isFileRemoved = (file: PhotoProps) => {
    return removedFiles.includes(file);
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
          {photosList.map((photo, index) => (
            <FileUploadContainer
              key={index}
              className={isFileRemoved(photo) ? 'file-removed' : ''}
            >
              <FileUpload
                file={photo.file}
                onRemove={() => handleRemoveFile(photo)}
                isSubmitting={isSubmitting}
                progress={photo.progress}
              />
            </FileUploadContainer>
          ))}
        </FilesContainer>
      </ContentContainer>
    </Container>
  );
}
