
import { useParams, Link } from "react-router-dom";

const ArtDescription = ({gallery}) => {

    const {artId } = useParams();

    const existingArt = gallery.objects.find(object=> object.images[0].imageid === parseInt(artId));

    return (
        <div className="wrapper">
        <h1>Hi from ArtDescription #{artId}</h1>
        <Link to={`/galleries/${gallery.id}`}>
        Back to Gallery: {gallery.name}
        </Link>
        <a href={existingArt.url}>{existingArt.title}</a>
</div>
    )
};

export default ArtDescription
