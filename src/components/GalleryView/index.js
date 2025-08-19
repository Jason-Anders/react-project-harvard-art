import { useParams } from "react-router-dom";
import ArtImageTile from '../ArtImageTile';

const GalleryView = ({galleries}) => {

const { galleryId } = useParams();
// console.log(galleryId)
// console.log(galleries);
const existingGallery = galleries.find(gallery=>gallery.id===parseInt(galleryId))
// console.log(existingGallery);
// if(existingGallery){
const picArray = existingGallery.objects.map((object)=>{
    return object.images[0].baseimageurl
});

    return (
        <div className="wrapper">
            <h1>Hello from GalleryView</h1>
            <h2>{existingGallery.name}</h2>
                <ArtImageTile art={picArray} />
        </div>
    )
// }
};

export default GalleryView
