const getRandomIndex = (size: number) => Math.floor(Math.random() * size);
export const generator = <T>(agents: T[], size: number) => {
  let result = [];
  for (let i = 0; i < size; i++) {
    const randomIndex = getRandomIndex(agents.length);
    result.push(agents[randomIndex]);
  }
  return result;
};
