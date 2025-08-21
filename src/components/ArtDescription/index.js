
import { useParams, Link } from "react-router-dom";

const ArtDescription = ({gallery}) => {

    const {artId } = useParams();

    const existingArt = gallery.objects.find(object=> object.images[0].imageid === parseInt(artId));
// console.log(existingArt);
    return (
        <div className="wrapper">
        <h1>{existingArt.title}</h1>
        <p>{existingArt.description}</p>
<h3>Credited By:</h3>
<p>{existingArt.creditline}</p>
<h3>Technique</h3>
<p>{existingArt.technique}</p>

        <Link to={`/galleries/${gallery.id}`}>
        Back to Gallery: {gallery.name}
        </Link>
        <a href={existingArt.url}>{existingArt.title}</a>

        <h2>Images</h2>
        {existingArt.images.map(image=>{
            return (
                <img src={image.baseimageurl} alt="" key={existingArt.id}></img>
            )
        })}
        {/* images descript credit and technique */}

</div>
    )
};

export default ArtDescription
