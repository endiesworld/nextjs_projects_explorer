import ColorPicker  from './colorPicker/colorPicker';
import StickerPad  from './stickerPads/stickerPadsComponent';
import SearchFormParent from './searchForm/searchFormComponent';
import ShoppingListComponent from './shoppingList/shoppingListComponent';
import FormControl from './formControl/formControlParent';
import './App.css';


function App() {
  return (
    <div className="App">
      <ColorPicker/>
      <StickerPad/>
      <SearchFormParent />
      <ShoppingListComponent  />
      <FormControl />
    </div>
  );
}

export default App;
