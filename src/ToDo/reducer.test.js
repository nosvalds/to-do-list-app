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

    // first item in the items array should be a new task with "Hello"
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });

});

it('removes items', () => {
    // Removing tests here
});

it('updates items', () => {
    // Updating tests here
});

it('completes items', () => {
    // Completing tests here
});

it('reduces', () => {
    // Reducer tests here
});