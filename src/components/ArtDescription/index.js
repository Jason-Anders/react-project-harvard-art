
import { useParams, Link } from "react-router-dom";

const ArtDescription = ({gallery}) => {

    const { artId } = useParams();

    const existingGallery = gallery.objects.find(object=> object.images[0].imageid === parseInt(artId));
//     console.log(artId);
// console.log(gallery);
// console.log(existingGallery);
// check params with data for existence before using
const galleryId = existingGallery.galleryid;
const galleryName = existingGallery.name;
// console.log(artId)

    return (
        <div className="wrapper">
        <h1>Hi from ArtDescription #{artId}</h1>
        <Link to={`/galleries/${galleryId}`}>
        Back to Gallery: {galleryName}
        </Link>
        <a href={existingGallery.url}>{existingGallery.title}</a>
</div>
    )
};

export default ArtDescription
