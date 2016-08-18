const generatedUid = uidGenerator();

export {generatedUid};

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
  });
}

/**
 * creates a number incremetor which increments by one
 *
 * @returns {function} which returns an incremented value everytime it's called
 */
export function incrementor() {
  let num = -1;
  return function increment() {
    return num++;
  };
}

/**
 * An uid generator specificly for aurelia form
 *
 * @returns {function}
 */
export function uidGenerator() {
  let incrementors = {};

  return function uidGenerate(type) {
    if (!incrementors[type]) {
      incrementors[type] = incrementor();
    }

    return `au-form-${type}-${incrementors[type]()}`;
  };
}
