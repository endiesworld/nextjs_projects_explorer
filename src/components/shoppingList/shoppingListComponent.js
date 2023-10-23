import { useState } from "react";
import AddNewItemForm from './addNewItemForm';

function ShoppingListComponent(){
    const [items, setItems] = useState([ {item: "Avocados", id: crypto.randomUUID()}, {item: "Broccoli", id: crypto.randomUUID()} , {item: "Carrot", id: crypto.randomUUID()}])
    return (
        <div className="wrapper" style={{
            width: "45%",
            height: "50vh",
            border: "thick double #32a1ce"
        }}>
        <div className="list-wrapper">
            <ol className="shopping-list">
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