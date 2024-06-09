export function formatDate(dateString: string): string {
  // Create a Date object from the provided string
  const date = new Date(dateString);

  // Extract the date components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based in JavaScript
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}
