import ColorPicker  from './components/colorPicker/colorPicker';
import StickerPad  from './components/stickerPads/stickerPadsComponent';
import SearchFormParent from './components/searchForm/searchFormComponent';
import ShoppingListComponent from './components/shoppingList/shoppingListComponent';
import FormControl from './components/formControl/formControlParent';
import WorkingWithRef from './components/WorkingWithRef';
import VideoPlayerComponent from './components/VideoPlayerComponent';
import Mediaplayer from './components/Mediaplayer';
import Counter from './components/Counter';
import DarkMode from './components/DarkMode';
import GlobalEvent from './components/GlobalEvent';
import ResizeWindow from './components/ResizeWindow';
import ToastyEffect from './components/ToastyEffect';
import Clock from './components/DigitalClock';

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
      <Mediaplayer />
      <Counter />
      <DarkMode />
      <GlobalEvent />
      <ResizeWindow />
      <ToastyEffect />
      <Clock />
    </div>
  );
}

export default App;
