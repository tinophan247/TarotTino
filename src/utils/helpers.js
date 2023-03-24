export const ramdomArray = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random]
}
