import {useContext} from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

function Favorite() {
    const favoriteCtx = useContext(FavoritesContext);
    const loadedMeetups = favoriteCtx.favorites;
    return(
        <section>
            <h1>Favorite Meetups Page</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    );
}

export default Favorite;