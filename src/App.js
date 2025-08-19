import hardvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';

function App() {
  // console.log(hardvardArt);
  return (

    <GalleryNavigation galleries={hardvardArt.records} />

  );
}

export default App;
