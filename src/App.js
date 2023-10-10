import ColorPicker  from './colorPicker/colorPicker';
import StickerPad  from './stickerPadsComponent/stickerPads';
import SearchFormParent from './searchFormComponent/searchFormParent';
import './App.css';


function App() {
  return (
    <div className="App">
      <ColorPicker/>
      <StickerPad/>
      <SearchFormParent />
    </div>
  );
}

export default App;
