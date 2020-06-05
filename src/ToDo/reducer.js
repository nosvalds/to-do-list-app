export const addItem = (state, { value }) => {
    let newState = {...state,};
    newState.items = [...state.items];
    newState.items.push({ task: value, completed: false });
    return newState
};