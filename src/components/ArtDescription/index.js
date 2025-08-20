
import { useParams } from "react-router-dom";

const ArtDescription = () => {

    const {artId} = useParams();

// check params with data for existence before using

// console.log(artId)
    return (
        <h1>Hi from ArtDescription #{artId}</h1>

    )
};

export default ArtDescription
