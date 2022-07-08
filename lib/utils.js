// Strings
const capitalFirstLetter = word => word.charAt(0).toUpperCase() + word.slice(1);
const capitalized = word => word.toUpperCase();
const lowerCase = word => word.toLowerCase();

// Objects

const isObject = obj => obj && typeof obj === 'object' && !(obj instanceof Date);

const listToString = list => Array.isArray(list) ? list.toString() : null;

const objectToList = obj => isObject(obj) ?
  Object.keys(obj).reduce((acc, key) => {
    return acc.concat(obj[key]);
  }, [])
  : null;


module.exports = {
  capitalFirstLetter,
  capitalized,
  lowerCase,
  isObject,
  listToString,
  objectToList
}