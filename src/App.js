import React from 'react';

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
import UselessMachine from './components/UselessMachine';
import IntervalCounter from './components/IntervalCounter';
import IntersectionObserver from './components/IntersectionObserver';
import ContactForm from './components/ContactForm';
import FetchOnMount from './components/FetchOnMount';
import BookSearch from './components/BookSearch';
import FetchCurrentUser from './components/FetchCurrentUser';
import MemoizedPrimeNumbers from './components/MemoizedPrimeNumbers';
import MemoizedPureBoxes from './components/MemoizedPureBoxes';
import MemoizedUseCallback from './components/MemoizedUseCallback';

import './App.css';


function App() {
  return (
    <React.StrictMode>
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
      <UselessMachine />
      <IntervalCounter />
      <IntersectionObserver /> 
      <ContactForm />
      <FetchOnMount /> 
      <BookSearch />
      <FetchCurrentUser /> 
      <MemoizedPrimeNumbers />
      <MemoizedPureBoxes />
      <MemoizedUseCallback />
    </div>
    </React.StrictMode>
    
  );
}

export default App;
