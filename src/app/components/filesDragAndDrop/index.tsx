import { FilesDragAndDropProps } from 'app/models/components/filesDragAndDrop';
import { useEffect, useRef, useState } from 'react';
import { ClickText, Container, Text } from './styles';

function FilesDragAndDrop({ onFilesSelect }: FilesDragAndDropProps) {
  const [dragging, setDragging] = useState(false);

  const drop: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const dropElement = drop.current;

    dropElement?.addEventListener('dragover', handleDragOver);
    dropElement?.addEventListener('drop', handleDrop);

    return () => {
      dropElement?.removeEventListener('dragover', handleDragOver);
      dropElement?.removeEventListener('drop', handleDrop);
    };
  }, []);

  const handleFiles = (files: File[]) => {
    const selectedFiles = Array.from(files);
    onFilesSelect(selectedFiles);
    if (inputRef?.current) inputRef.current.value = '';
  };

  const handleDragOver = (e: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(true);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;

    if (files && files.length) {
      handleFiles(files);
    }

    setDragging(false);
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <Container ref={drop}>
      {!dragging && (
        <>
          <Text>Arraste suas fotos</Text>
          <Text>ou</Text>
          <ClickText onClick={onButtonClick}>clique aqui</ClickText>
          <input
            ref={inputRef}
            type="file"
            id="input-file-upload"
            multiple={true}
            onChange={handleChange}
          />
        </>
      )}
    </Container>
  );
}

export default FilesDragAndDrop;
