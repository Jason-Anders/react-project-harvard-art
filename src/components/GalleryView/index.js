import { useParams } from "react-router-dom";

const GalleryView = ({galleries}) => {

const { galleryId } = useParams();
console.log(galleryId)

const existingGallery = galleries.find(gallery=>gallery.id===parseInt(galleryId))

    return (
        <div className="wrapper">
            <h1>Hello from GalleryView</h1>
            <h2>{existingGallery.name}</h2>
        </div>
    )
};

export default GalleryView
