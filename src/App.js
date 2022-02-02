import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import About from './components/About/About';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function App() {

  const [activeIndex, setActiveIndex] = useState(0);

  //Navigation wheel
  const handleWheel = ({deltaY}) => {
    if(deltaY < 0 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if(activeIndex < 2) {
      setActiveIndex(activeIndex + 1);
    }
  }

  //Navigation key
  const handleKeyDown = ({keyCode}) => {
    if(keyCode === 38 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if(keyCode === 40 && activeIndex < 2) {
      setActiveIndex(activeIndex + 1);
    }
  }

  //Navigation mobile
  const handlerSwipe = useSwipeable({
    onSwipedUp: () => {
      if(activeIndex < 2) setActiveIndex(activeIndex + 1)
    },
    onSwipedDown: () => {
      if(activeIndex > 0) setActiveIndex(activeIndex - 1)
    }
  })

  //Navigation header click
  const handleHeaderClick = (index) => {setActiveIndex(index)}


  return (
    <div className="App" {...handlerSwipe} onWheel={handleWheel} onKeyDown={handleKeyDown} tabIndex="0">
      <Header handleHeaderClick={handleHeaderClick} activeIndex={activeIndex}/>
      <div className="pageContent" style={{ top : `-${activeIndex * 90}vh`}}>
        <Home/>
        <Product/>
        <About/>
      </div>
    </div>
  );
}



export default App;
