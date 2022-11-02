import { useState, useEffect } from 'react';
import { getDatabase, ref, push ,onValue} from 'firebase/database';
import firebase from './firebase';
import AnnualReviewForm from './AnnualReviewForm';
import DisplayAnnualReview from './DisplayAnnualReview';

function AnnualReview() {
   
    //this state will track the state of button 'submit' to decide whether AnnualReviewForm and DisplayAnnualReview component is visible
    const [isAnnualReviewFormVisible, setIsAnnualReviewFormVisible] = useState(false);

     // this state will track the resolutions from db
     const[review, setReview] = useState([]);

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
        })
    }, [])

    //control what happens when click 'submit' in AnnualReviewForm components
    const getFormState = (e,getSavedResolutionData) => {
        //prevent form from submitting
        e.preventDefault();

        setIsAnnualReviewFormVisible(!isAnnualReviewFormVisible);

        const database = getDatabase(firebase)
        const dbRef = ref(database, "/review")

        push(dbRef,getSavedResolutionData);
       
    }


    return (

        <div className="annualForm">

            {
                isAnnualReviewFormVisible ?
                    null
                    : (<AnnualReviewForm getFormState={getFormState} />)}


            {
                isAnnualReviewFormVisible ?
                    (<DisplayAnnualReview  review={review}/>)
                    : null
            }

        </div>




    )
}

export default AnnualReview