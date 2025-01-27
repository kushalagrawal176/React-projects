import './App.css'
import Accordion from "./components/accordion"
import RandomColor from "./components/random-colour";
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';

function App() {

  return (
      <div className='App'>
        {/* <Accordion/> */}

        {/* <RandomColor /> */}

        {/* <StarRating noOfStars={5}/> */}

        {/* <ImageSlider url = {"https://picsum.photos/v2/list"} page = {"1"} limit={"10"}/> */}

        {/* <TreeView menus = {menus}/> */}

        <QRCodeGenerator />
      </div>
  );
}

export default App;


// all these codes are from free code camp org youtube 25 react projects