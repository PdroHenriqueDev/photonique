export interface PhotosUploadProps {
  files?: File[];
  onFilesSelect: (filesSelected: File[]) => void;
}
