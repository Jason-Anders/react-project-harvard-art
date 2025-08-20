import {Link} from 'react-router-dom';

const ArtImageTile = ({art, gallery})=>{
// console.log(art[0]);
    return(
            <Link to={`/galleries/${gallery.id}/art/${art[0].imageid}`}>
                <img src={art[0].baseimageurl} alt=''></img>
            </Link>
    )
}

export default ArtImageTile;
