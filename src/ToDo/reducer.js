export const addItem = (state, { value }) => {
    let result = {};
    result.items = [];
    result.items.push({ task: value, completed: false });
    result.items.push(state);
    return result
};