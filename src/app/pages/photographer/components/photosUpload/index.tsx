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
import { delay } from 'app/utils/delay';

export default function PhotosUpload({
  files = [],
  onFilesSelect,
}: PhotosUploadProps) {
  const [filesSelected, setFilesSelected] = useState<File[]>([]);
  const [removedFiles, setRemovedFiles] = useState<File[]>([]);

  const filesList = filesSelected.length > 0 ? filesSelected : files;
  const total = filesList.length || null;

  const handleFilesSelect = (filesSelected: File[]) => {
    onFilesSelect(filesSelected);
    setFilesSelected(filesSelected || files);
  };

  const handleRemoveFile = async (fileRemoved: File) => {
    setRemovedFiles((prevRemovedFiles) => [...prevRemovedFiles, fileRemoved]);
    await delay(250);
    const newFiles = filesList.filter((file) => file !== fileRemoved);
    handleFilesSelect(newFiles);
  };

  const isFileRemoved = (file: File) => {
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
          {filesList.map((file, index) => (
            <FileUploadContainer
              key={index}
              className={isFileRemoved(file) ? 'file-removed' : ''}
            >
              <FileUpload file={file} onRemove={() => handleRemoveFile(file)} />
            </FileUploadContainer>
          ))}
        </FilesContainer>
      </ContentContainer>
    </Container>
  );
}
