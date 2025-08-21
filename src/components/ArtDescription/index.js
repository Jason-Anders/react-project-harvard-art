
import { useParams, Link } from "react-router-dom";

const ArtDescription = ({gallery}) => {

    const {artId } = useParams();
// console.log()
    const existingArt = gallery.objects.find(object=> {
        if(object.images[0]){
    return object.images[0].imageid === parseInt(artId)
} else {return -1}
})
;
console.log(existingArt);
// if(existingArt.images.map(img=>!img.baseimageurl)){
//     return 'No image url'
// }

// if(existingArt.images.map(img=>!img.imageid)){
//     return 'No image id'
// }
    return (
        <div className="wrapper">
        <h1>{existingArt.title}</h1>
        <p>{existingArt.description}</p>

<p>
        <Link to={`/galleries/${gallery.id}`}>
        Back to Gallery: {gallery.name}
        </Link>
       </p>

       <p>
        <a href={existingArt.url}>More Details at HardvardArtMuseums.org</a>
</p>

        <h2>Images</h2>
        {existingArt.images.map(image=>{
            return (

                <img src={image.baseimageurl} alt="" key={image.imageid} className="fullImage"></img>
            )
        })}
        {/* images descript credit and technique */}
        <h3>Credited By:</h3>
<p>{existingArt.creditline}</p>
<h3>Technique</h3>
<p>{existingArt.technique}</p>
 <br></br>


</div>
    )
};

export default ArtDescription
