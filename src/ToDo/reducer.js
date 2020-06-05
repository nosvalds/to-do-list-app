export const addItem = (state, { value }) => {
    return {...state,
                    items: [...state.items,
                        { task: value, completed: false } // add in item with value
                    ]
    };
};

export const removeItem = (state, { index }) => {
    return {
        ...state,
        items: state.items.filter((item, i) => i !== index) // filter to remove the item where index matches i
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
    return state;
};