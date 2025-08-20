import {Link} from 'react-router-dom';

const ArtImageTile = ({art, gallery})=>{
// console.log(art[0]);
const firstImage=art[0];

if(firstImage){
    return(
            <Link to={`/galleries/${gallery.id}/art/${firstImage.imageid}`}>
                <img src={art[0].baseimageurl} alt=''></img>
            </Link>
    )
}
}

export default ArtImageTile;
