
import { useParams, Link } from "react-router-dom";

const ArtDescription = ({gallery}) => {

    const {artId} = useParams();
console.log(gallery);
// check params with data for existence before using
const galleryId = gallery.galleryid;
const galleryName = gallery.name;
// console.log(artId)
    return (
        <div className="wrapper">
        <h1>Hi from ArtDescription #{artId}</h1>
        <Link to={`/galleries/${galleryId}`}>
        Back to Gallery: {galleryName}
        </Link>
</div>
    )
};

export default ArtDescription
