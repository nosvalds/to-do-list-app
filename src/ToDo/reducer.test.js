import reducer, {
    addItem,
    removeItem,
    updateItem,
    completeItem
} from './reducer';

const initialState = {
    items: []
};

it('adds items', () => {
    // Adding tests here
    let result = addItem(initialState, { value: "Hello" });

    // 01 first item in the items array should be a new task with "Hello"
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });

    // 02 shouldn't be the same array we started with
    expect(result.items).not.toBe(initialState.items);

    // 03 passing in the previous result, which already had one item
    result = addItem(result, { value: "Mum" });

    // should be two items
    expect(result.items.length).toBe(2);

    // 04 check both items are now in items, in order given
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    expect(result.items[1]).toEqual({ task: "Mum", completed: false });
});

it('removes items', () => {
    // Removing tests here
    // 01 start with a few items
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
            { task: "How", completed: false },
            { task: "Are", completed: true },
            { task: "You", completed: false },
            { task: "Today", completed: false },
        ]
    };

    // remove item at index 0
    let removed = removeItem(many, { index: 0 });

    // "Hello" should be gone, so should get back "Mum" task
    expect(removed.items[0]).toEqual({ task: "Mum", completed: false });

    // check that it's not the same object being returned
    expect(removed.items).not.toBe(many.items);

    // should be 5 items, not 6
    expect(removed.items.length).toBe(5);

    // use the previously pruned array
    removed = removeItem(removed, { index: 2 });

    // check that the right task is now in index 2
    expect(removed.items[2]).toEqual({ task: "You", completed: false });
});

it('updates items', () => {
    // Updating tests here
    // 01 update an item it's task property should change
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
        ]
    };
    
    // update an item passing the index and value
    let updated = updateItem(many, { index: 1, value: "Dad" });
    
    // should have updated the task property
    expect(updated.items[1]).toEqual({ task: "Dad", completed: false });

    // 02 check that it's not the same object being returned
    expect(updated.items[1]).not.toBe(many.items[1]);

    // 03 update the item at index 0
    updated = updateItem(many, { index: 0, value: "Good Morning" });

    // check that the completed value is the same
    expect(updated.items[0]).toEqual({ task: "Good Morning", completed: true });
});

it('completes items', () => {
    // Completing tests here
    // 01
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
        ]
    };
    
    // complete the item at index 1
    let completed = completeItem(many, { index: 1 });
    
    // expected completed to be true
    expect(completed.items[1]).toEqual({ task: "Mum", completed: true });
});

it('reduces', () => {
    // Reducer tests here
});