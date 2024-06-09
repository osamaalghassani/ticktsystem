export const formatFileSize = (size: number): string => {
  const index = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(1_024));
  return (
    Number((size / 1_024 ** index).toFixed(2)) +
    ' ' +
    ['B', 'KB', 'MB', 'GB', 'TB'][index]
  );
};
