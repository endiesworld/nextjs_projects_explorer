import React from 'react';
import styles from './shoppingListstyles.module.css';

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
        <form onSubmit={e => addItems(e)} className={styles.form_container}>
            <label htmlFor="new-list-form-input">
            New item:
            </label>
            
            <div className="row">
            <input
            className={styles.form_search_input}
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