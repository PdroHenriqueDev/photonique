export interface FileUploadProps {
  isSubmitting?: boolean;
  onRemove: () => void;
  file: File;
  progress: number;
}
