/**
 * Used to make options that are defined in schema element comply with a
 * specific format which is used to render them
 *
 * @param {object[]|string[]} options
 * @returns {array} which is transformed to an object with name and value
 * properties
 */
export function normalizeOptions(options) {
  return options.map(option => {
    if (typeof option === 'string') {
      return {
        name : option,
        value: option
      };
    }

    if (option.name && option.value) {
      return option;
    }

    if (option.name || option.value) {
      return {
        name : option.name || option.value,
        value: option.name || option.value
      };
    }

    return {};
  });
}
