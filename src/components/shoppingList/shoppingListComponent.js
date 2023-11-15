import { useState } from "react";
import AddNewItemForm from './addNewItemForm';
import styles from './shoppingListstyles.module.css';

function ShoppingListComponent(){
    const [items, setItems] = useState([ {item: "Avocados", id: crypto.randomUUID()}, {item: "Broccoli", id: crypto.randomUUID()} , {item: "Carrot", id: crypto.randomUUID()}])
    return (
        <div className="wrapper" style={{
            width: "45%",
            height: "50vh",
            border: "thick double #32a1ce"
        }}>
        <div className={styles.list_wrapper}>
            <ol className={styles.shopping_list}>
            { 
            items.map( item => <li key={item.id}>{item.item}</li>)
            }
            </ol>
        </div>
        <AddNewItemForm items={items} setItems={setItems}/>
        </div>
    );
}

export default ShoppingListComponent