function getUtils(name) {
  return JSON.parse(localStorage.getItem(name));
}

function setUtils(name, value) {
  return localStorage.setItem(name, JSON.stringify(value));
}

function cleanStorageUtils(name) {
  return localStorage.removeItem(name);
}

export { getUtils, setUtils, cleanStorageUtils };
