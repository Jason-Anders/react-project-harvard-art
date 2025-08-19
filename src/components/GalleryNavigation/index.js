
import { NavLink } from 'react-router-dom';
import  './GalleryNavigation.css';

const GalleryNavigation = ({galleries}) => {

    // debugger
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink exact to='/'>
                Home
            </NavLink>
<ul>
{galleries.map(gallery=> (
    <li key={gallery.id}>
    <NavLink to={`/galleries/${gallery.id}`}>
    {gallery.name}
    </NavLink>
    </li>
))}
</ul>
        </nav>
    )
}

export default GalleryNavigation;
