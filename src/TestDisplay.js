import { useState, useEffect } from 'react';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import firebase from './firebase';
import Book from './Book';
import AnnualReview from './AnnualReview';
import { Link, Outlet } from 'react-router-dom';



function TestDisplay(props) {

    console.log(props)

    // const [editForm, setEditForm] = useState(false);

    // const handleEditButton = () => {
    //     setEditForm(!editForm)
    // }

    //get the year variable
    const date = new Date();
    let year = date.getFullYear();

    return (
        <div className="displayReview">
            <h2>Imcomplete Facts About Me in {year}</h2>
            {/* <ul>
                <li>
                    <h3>Favorite Song</h3>
                    <p>{props.review[(props.review.length) - 1].name.song}</p>

                </li>
                <li>
                    <h3>Favorite Book</h3>
                    <p>{props.review[(props.review.length) - 1].name.book}</p>
                </li>
                <li>
                    <h3>Favorite Movie or Show</h3>
                    <p>{props.review[(props.review.length) - 1].name.show}</p>
                </li>
                <li>
                    <h3>Favorite Place</h3>
                    <p>{props.review[(props.review.length) - 1].name.place}</p>
                </li>
                <li>
                    <h3>Favorite Moment</h3>
                    <p>{props.review[(props.review.length) - 1].name.moment}</p>
                </li>
                <li>
                    <h3>Current State of Mind</h3>
                    <p>{props.review[(props.review.length) - 1].name.mind}</p>
                </li>
            </ul> */}

            <Link to='/test'>
            <button>Edit!</button>
            </Link>

            {/* <button onClick={handleEditButton}>Edit</button>


            {editForm ?
                <AnnualReview />
                : null} */}

        </div>
    )
}

export default TestDisplay