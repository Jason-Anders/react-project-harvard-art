import hardvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import {Route} from 'react-router-dom';

function App() {
  // console.log(hardvardArt);
  return (
    <div className='page-wrapper'>
      <GalleryNavigation galleries={hardvardArt.records} />
      <Route path='/galleries/:galleryId'>
        <GalleryView galleries={hardvardArt.records}/>
      </Route>
    </div>
  );
}

export default App;
