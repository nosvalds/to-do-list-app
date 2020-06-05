export const addItem = (state, { value }) => {
    let newState = {...state,};
    newState.items = [...state.items];
    newState.items.push({ task: value, completed: false });
    return newState
};

export const removeItem = (state, { index }) => {
    let newState = {...state,};
    newState.items = [...state.items];
    newState.items.splice(index, 1);
    return newState;
}