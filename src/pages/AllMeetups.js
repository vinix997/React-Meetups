import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetups() {
    const [isLoading, setIsLoading] = useState(true);

    const [loadedMeetups, setLoadedMeetups] = useState([]);
    
    useEffect(() => {
        setIsLoading(true)

        fetch('https://react-meetup-5fb92-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
            .then((response) => { 
                return response.json();
            })
            .then((data) => {
            const meetups = [];
            for(const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            console.log(meetups);
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);

    

    if(isLoading){
        return <section>
            <p>Loading....</p>
        </section>
    }

    return(
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    );
}

export default AllMeetups;