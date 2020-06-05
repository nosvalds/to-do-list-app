const deepCopyFunction = (inObject) => {
    let outObject, value, key
  
    if (typeof inObject !== "object" || inObject === null) {
      return inObject // Return the value if inObject is not an object
    }
  
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {}
  
    for (key in inObject) {
      value = inObject[key]
  
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = deepCopyFunction(value)
    }
  
    return outObject
  }


export const addItem = (state, { value }) => {
    let newState = deepCopyFunction(state);
    newState.items.push({ task: value, completed: false });
    return newState
};

export const removeItem = (state, { index }) => {
    let newState = deepCopyFunction(state);
    newState.items.splice(index, 1);
    return newState;
}

export const updateItem = (state, { index, value }) => {
    let newState = deepCopyFunction(state);
    newState.items[index].task = value;
    return newState;
}