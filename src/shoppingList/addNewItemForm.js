import React from 'react';

function AddNewItemForm({items, setItems}) {
    const [initValue, updateValue] = React.useState('')
    function addItems(e){
        e.preventDefault();
        let newItems = [...items, {item:initValue, id: crypto.randomUUID()}]
        setItems(newItems)
        updateValue('')
    }
    return (
        <div className="new-list-item-form">
        <form onSubmit={e => addItems(e)}>
            <label htmlFor="new-list-form-input">
            New item:
            </label>
            
            <div className="row">
            <input
                required={true}
                id="new-list-form-input"
                type="text"
                value={initValue}
                onChange={ e => updateValue(e.target.value)}
            />
            <button>
                Add
            </button>
            </div>
        </form>
        </div>
    );
}

export default AddNewItemForm;