const getRandomItemFromArray = <T>(array: T[]): T | null =>
    array.length ? array[Math.floor(Math.random() * array.length)] : null;

export default getRandomItemFromArray;
