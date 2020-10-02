export function getEpoch() {
  return new Date().getTime();
}

export function greet(firstName, secondName) {
  return `Hello ${firstName} ${secondName}`;
}

export default {
  getEpoch: getEpoch,
  greet: greet
};
