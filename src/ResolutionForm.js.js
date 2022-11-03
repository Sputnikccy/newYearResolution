import axios from 'axios';
import { useState, useEffect } from 'react';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import firebase from './firebase';
import errorImageURL from './assets/error.jpg';
import DisplayResolutions from './DisplayResolutions';
import { Link } from 'react-router-dom';

function ResolutionForm() {
    // this state will  track user inputs from the form
    const [userInput, setUserInput] = useState('');

    // this state will track the resolutions from db
    const [resolutions, setResolutions] = useState([]);

    //initial render when this component mounts
    useEffect(() => {

        const database = getDatabase(firebase)
        const dbRef = ref(database, "/resolution")

        onValue(dbRef, (response) => {
            //create a variable to store the new state
            const newState = [];

            const data = response.val();
            for (let key in data) {
                newState.unshift({ id: key, name: data[key] })
            }
            // updating state with the new array
            setResolutions(newState)

        })
    }, [])


    //grab user's input
    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    //control what happens after form submit 
    const handleFormSubmit = (e) => {
        //prevent form from submitting
        e.preventDefault();

        const database = getDatabase(firebase)
        const dbRef = ref(database, "/resolution")

        //API request
        axios({
            url: 'https://api.unsplash.com/search/photos',
            method: 'GET',
            dataResponse: 'json',
            params: {
                client_id: 'xMApnHMvGsHXF8WNkU53mf3KirR2oQ8ZS6YYr-M-NAU',
                query: userInput,
                per_page: 1
            }
        }).then((res) => {
            const apiImage = res.data.results[0].urls.thumb;
            const apiImageDescription = res.data.results[0].alt_description;
            const savedResolutionData = { resolution: userInput, image: apiImage, imageDescription: apiImageDescription };

            //push user's input, corresponding image and image description from API into firebase
            push(dbRef, savedResolutionData);

            // reset the userInput state
            setUserInput('');
        }).catch((error) => {
            const errorImage = errorImageURL;
            const errorDescription = 'Sorry, no images match the search.'
            const savedResolutionData = { resolution: userInput, image: errorImage, imageDescription: errorDescription };

            //when API call fails, push user's input, error image and  image description into firebase
            push(dbRef, savedResolutionData)

            // reset the userInput state
            setUserInput('');
        })
    }

    return (
        <div className="resolutionForm">
            <form action="submit" onSubmit={handleFormSubmit}>
                <label htmlFor="newResolution">New Year's Resolution</label>
                <br />
                <input type="text"
                    id="newResolution"
                    onChange={handleInputChange}
                    value={userInput} />
                <br />
                <button type="submit" className='button'>Dream A New Dream</button>
            </form>
            <DisplayResolutions resolutions={resolutions} />

            <Link to='/' className='backLink'> 
                <button className='button back'>Go Back</button>
            </Link>
        </div>
    )
}


export default ResolutionForm

