export const shuffleArray = <T>(array: T[]): T[] => {
  const localArray = [...array];
  for (let i = localArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [localArray[i], localArray[j]] = [localArray[j], localArray[i]];
  }
  return localArray;
};
