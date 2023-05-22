export const getRandom = (elements) => {
    const randonIndex = Math.floor(Math.random() * elements.length);
    return elements[randonIndex];
};