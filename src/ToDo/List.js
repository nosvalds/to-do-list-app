import React, { useState, useReducer } from "react";
import reducer from "./reducer";

// initial state
// put in some dummy content to start with
const initialState = {
  items: [{
    task: "Do First Thing",
    completed: false,
  }, {
    task: "Do Second Thing",
    completed: true,
  }],
};

// component
const List = () => {
  // setup reducer
  // get items from state
  const [{ items }, dispatch] = useReducer(reducer, initialState);

  // controlled component stuff
  // keep track of input value
  // easier to keep out of reducer
  const [input, setInput] = useState("");

  // update input state
  const handleInput = (e) => {
    setInput(e.currentTarget.value);
  };

  return (
    <div className="card">
      <form className="card-header">
        { /* add task input */ }
        <input
          className="form-control"
          onChange={ handleInput }
          value={ input }
        />
      </form>

      <div className="card-body">
        { /* show items if there are any */ }
        { items.length === 0 ? <p className="card-text">No list items</p> : (
          <ul className="list-group list-group-flush">
            { items.map((item, index) => (
              /* so many bootstrap classes! */
              <li
                key={ index }
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                { /* strike-through for completed items */ }
                <span
                  className="flex-grow-1"
                  style={ {
                    cursor: "pointer",
                    textDecoration: item.completed ? "line-through" : ""
                  } }
                  onClick={ () => dispatch({ type: "MARK_COMPLETED", index: index })}
                >
                    { item.task }
                </span>

                { /* edit button */ }
                <button className="btn btn-sm btn-primary mr-1">Edit</button>

                { /* remove button */ }
                <button 
                    className="btn btn-sm btn-danger"
                    onClick={ () => dispatch({ type: "REMOVE_ITEM", index: index })}
                >
                    &times;
                </button>
              </li>
            )) }
          </ul>
        )}
      </div>
    </div>
  );
};

export default List;