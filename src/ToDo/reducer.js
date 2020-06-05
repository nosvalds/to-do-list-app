export const addItem = (state, { value }) => {
    let result = {};
    result.items = [];
    result.items.push({ task: value, completed: false });
    return result
};