import {Link} from 'react-router-dom';

const ArtImageTile = ({art})=>{

    return(
            <Link>
                <img src={art[0]} alt=''></img>
            </Link>
    )
}

export default ArtImageTile;
