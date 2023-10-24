import ColorPicker  from './components/colorPicker/colorPicker';
import StickerPad  from './components/stickerPads/stickerPadsComponent';
import SearchFormParent from './components/searchForm/searchFormComponent';
import ShoppingListComponent from './components/shoppingList/shoppingListComponent';
import FormControl from './components/formControl/formControlParent';
import WorkingWithRef from './components/WorkingWithRef';
import VideoPlayerComponent from './components/VideoPlayerComponent';
import './App.css';


function App() {
  return (
    <div className="App">
      <ColorPicker/>
      <StickerPad/>
      <SearchFormParent />
      <ShoppingListComponent  />
      <FormControl />
      <WorkingWithRef />
      <VideoPlayerComponent />
    </div>
  );
}

export default App;
