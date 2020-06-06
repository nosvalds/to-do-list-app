export const addItem = (state, { value }) => {
    let values = value.split(/\W+/); // split into array of words
    let array = [...values.map((newWord) => {
        return {text: newWord, value: 1}
    })]
    console.log(array.filter(oldWord => oldWord.text === "hello")[0].value);
    return {
        ...state,
        items: [...state.items,
            { 
                task: value, 
                completed: false 
            } // add in item with value
        ],
        words: values.map((newWord) => {
            if (state.words.filter(oldWord => oldWord.text === newWord).length == 0) {
                 return { text: newWord, value: 1 }
            } else {
                return { text: newWord, value: 2 }
            }
        })
    };
};

export const removeItem = (state, { index }) => {
    return {
        ...state,
        items: state.items.filter((_, i) => i !== index) // filter to remove the item where index matches i
    };
}

export const updateItem = (state, { index, value }) => {
    return {
        ...state,
        items: state.items.map((item, i) =>{
            return i === index ? {...item, task: value} : item;
        })
    };
}

export const completeItem = (state, { index }) => {
    return {
        ...state,
        items: state.items.map((item, i) =>{
            return i === index ? {...item, completed: true} : item;
        })
    }
}

export default (state, action) => {
    switch (action.type) {
        case "NEW_ITEM": return addItem(state, action);
        case "REMOVE_ITEM": return removeItem(state, action);
        case "CHANGE_ITEM": return updateItem(state, action);
        case "MARK_COMPLETED": return completeItem(state, action);
        default: return state;
    }
};