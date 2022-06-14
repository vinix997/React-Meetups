import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
    const history = useNavigate();

    function addMeetupHandler(meetupData){
        fetch('https://react-meetup-5fb92-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(() => {
            history("/",{replace: true});
        });
        
    }

    return(
        <div>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </div>
    );
}

export default NewMeetup;