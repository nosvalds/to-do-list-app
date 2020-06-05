export const addItem = (state, { value }) => {
    return {...state,
                    items: [...state.items,
                        { task: value, completed: false }
                    ]
    };
    // newState.items = ;
    // newState.items.push({ task: value, completed: false });
    // return newState
};

export const removeItem = (state, { index }) => {
    let newState = {...state};
    newState.items = [...state.items];
    newState.items.splice(index, 1);
    return newState; // use a filter to remove item
}

export const updateItem = (state, { index, value }) => {
    return {
        ...state,
        items: state.items.map((item, i) =>{
            return i === index ? {...item, task: value} : item;
        })
    };
}