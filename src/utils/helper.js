export const upperCaseFirstLetter = (string) => string.replace(/^./, string[0].toUpperCase());

export const calculateDuration = (start, end) => {
  const durationInMilliseconds = new Date(end) - new Date(start);
  const minutes = Math.floor((durationInMilliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((durationInMilliseconds / (1000 * 60 * 60)) % 24);
  return `${hours}h ${minutes}min`;
};
