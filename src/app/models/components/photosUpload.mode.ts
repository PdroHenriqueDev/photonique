export interface PhotosUploadProps {
  photos?: PhotoProps[];
  onFilesSelect: (filesSelected: PhotoProps[]) => void;
  isSubmitting: boolean;
}

export interface FileProgressProps {
  id: string;
  progress: number;
}

export interface PhotoProps {
  id: string;
  file: File;
  progress: number;
  isSent?: boolean;
}
