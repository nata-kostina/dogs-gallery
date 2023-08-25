const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
export const areFilesValid = (files: File[]) => {
  const filesArr = Array.from(files);
  return filesArr.every((file) => acceptedImageTypes.includes(file.type));
};
