import React, { useState, useReducer } from "react";
import reducer from "./reducer";

// initial state
// put in some dummy content to start with
const initialState = {
  items: [],
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
  const [editInput, setEditInput] = useState("");
  const [editIndex, setEditIndex] = useState("");

  // update input state
  const handleInput = (e) => {
    setInput(e.currentTarget.value);
  };

  // update edit input state
  const handleEditInput = (e) => {
    setEditInput(e.currentTarget.value);
  };

  // handle submit of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
        type: "NEW_ITEM", 
        value: input 
    })
    setInput("");
  }

  // handle edit of an item
  const handleEdit = (index) => {
    setEditIndex(index); // when edit button is pushed update the "edit index" in state so we change that item to allow editing
    setEditInput(items[index].task) // set the Edit input to the value of the task name
  }

  const handleSaveChange = (e, index) => {
    e.preventDefault(); // keep form from refreshing

    // use dispatch to change the item in state
    dispatch({
        type: "CHANGE_ITEM",
        value: editInput,
        index: index
    })

    // clear input and clear the Edit index flag so the task display's normally
    setEditInput("");
    setEditIndex("");
  }

  return (
    <div className="card">
        <form 
            className="card-header"
            onSubmit={ handleSubmit }        
        > 
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
                {index === editIndex ? 
                // Editing an item
                <form 
                    className=""
                    onSubmit={ (e) => handleSaveChange(e, index) }        
                > 
                    <input
                        className="form-control"
                        onChange={ handleEditInput }
                        value={ editInput }
                    />
                    <button 
                        className="btn btn-sm btn-primary mr-1"
                    >
                        Save
                    </button>
                </form> : 
                // Normal display (Not editing)
                (<span
                  className="flex-grow-1"
                  style={ {
                    cursor: "pointer",
                    textDecoration: item.completed ? "line-through" : ""
                  } }
                  onClick={ () => dispatch({ type: "MARK_COMPLETED", index: index })}
                >
                    { item.task }
                </span>)}

                { /* only show edit button  when not in edit mode */ }
                { index === editIndex ? null :
                    <button 
                        className="btn btn-sm btn-primary mr-1"
                        onClick={ () => handleEdit(index) }
                    >
                        Edit
                    </button>
                }

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