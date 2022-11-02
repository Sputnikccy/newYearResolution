import { useState, useEffect } from 'react';
import { getDatabase, ref, push, onValue, remove, update } from 'firebase/database';
import firebase from './firebase';
import AnnualReviewForm from './AnnualReviewForm';
import DisplayAnnualReview from './DisplayAnnualReview';
import { Link, Outlet } from 'react-router-dom';
import TestDisplay from './TestDisplay';

function TestForm() {

    // this state will track user inputs from the form
    const [songInput, setSongInput] = useState('');
    const [bookInput, setBookInput] = useState('');
    const [showInput, setShowInput] = useState('');
    const [placeInput, setPlaceInput] = useState('');
    const [momentInput, setMomentInput] = useState('');
    const [mindInput, setMindInput] = useState('');


    //grab user's input
    const handleSongInput = (e) => {
        setSongInput(e.currentTarget.value)
    }
    const handleBookInput = (e) => {
        setBookInput(e.currentTarget.value)
    }
    const handleShowInput = (e) => {
        setShowInput(e.currentTarget.value)
    }
    const handlePlaceInput = (e) => {
        setPlaceInput(e.currentTarget.value)
    }
    const handleMomentInput = (e) => {
        setMomentInput(e.currentTarget.value)
    }
    const handleMindInput = (e) => {
        setMindInput(e.currentTarget.value)

    }


    //gather user's input
    const savedReviewData = { song: songInput, book: bookInput, show: showInput, place: placeInput, moment: momentInput, mind: mindInput }

    // this state will track the review from db
    const [review, setReview] = useState([]);

    useEffect(() => {
        const database = getDatabase(firebase)
        const dbRef = ref(database, "/review")

        onValue(dbRef, (response) => {
            //create a variable to store the new state
            const newState = [];

            const data = response.val();
            for (let key in data) {
                newState.push({ id: key, name: data[key] })
            }
            //updating state with the new array
            setReview(newState)
            console.log(newState)
        })
    }, [])

    //control what happens when click 'submit' in AnnualReviewForm components
    const getFormState = (e) => {
        // prevent form from submitting
        e.preventDefault();

        const database = getDatabase(firebase)
        const dbRef = ref(database, "/review")

        push(dbRef, savedReviewData);

    }

   const[click,setClick] =useState(false)
   const handle =()=>{

   }

    return (

        <div className="annualForm">
            <div className="annualReview">
                <h2>Let's record some of your favorites from the year!</h2>
                <form action="submit" onSubmit={getFormState}>
                    <label htmlFor="song">Favorite Song</label>
                    <input type="text"
                        id="song"
                        onChange={handleSongInput}
                        value={songInput} />
                    <label htmlFor="Book">Favorite Book</label>
                    <input type="text"
                        id="book"
                        onChange={handleBookInput}
                        value={bookInput} />
                    <label htmlFor="show">Favorite Movie or Show</label>
                    <input type="text"
                        id="show"
                        onChange={handleShowInput}
                        value={showInput} />
                    <label htmlFor="place">Favorite Place</label>
                    <input type="text"
                        id="place"
                        onChange={handlePlaceInput}
                        value={placeInput} />
                    <label htmlFor="moment">Favorite Moment</label>
                    <input type="text"
                        id="moment"
                        onChange={handleMomentInput}
                        value={momentInput} />
                    <label htmlFor="mind">Current State Of Mind </label>
                    <input type="text"
                        id="mind"
                        onChange={handleMindInput}
                        value={mindInput} />

                    {/* <button type="submit">Submit</button> */}


                    <Link to='/testDisplay'>
                    <button onClick={handle}>submit</button>

                    </Link>


                                                  
                    {
                        setClick ?
                            (<TestDisplay review={review} />)
                            : null
                    } 







                </form>
            </div>

        </div>




    )
}

export default TestForm