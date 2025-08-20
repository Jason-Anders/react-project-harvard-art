import { useParams, Route } from "react-router-dom";
import ArtImageTile from '../ArtImageTile';

const GalleryView = ({galleries}) => {

const { galleryId } = useParams();
const existingGallery = galleries.find(gallery=>gallery.id===parseInt(galleryId))
console.log(existingGallery);

// const picArray = existingGallery.objects.map((object)=>{
//     return object.images[0]
// });

    return (
        <div className="wrapper">
            <h1>Hello from GalleryView</h1>
            <h2>{existingGallery.name}</h2>
                {/* <ArtImageTile art={picArray} gallery={existingGallery}/> */}
            <Route exact to={`/galleries/${galleryId}`}>
            {existingGallery.objects.map(object=>{
                 return (
                     <ArtImageTile art={[object.images[0]]} gallery={existingGallery}/>
                )
             })}
 {/* <ArtImageTile art={picArray} gallery={existingGallery}/> */}
            </Route>
        </div>
    )
// }
};

export default GalleryView
