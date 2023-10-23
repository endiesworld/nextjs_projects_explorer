import ColorPicker  from './components/colorPicker/colorPicker';
import StickerPad  from './components/stickerPads/stickerPadsComponent';
import SearchFormParent from './components/searchForm/searchFormComponent';
import ShoppingListComponent from './components/shoppingList/shoppingListComponent';
import FormControl from './components/formControl/formControlParent';
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
