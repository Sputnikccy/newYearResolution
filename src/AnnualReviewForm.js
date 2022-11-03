import { useState} from 'react';

function AnnualReviewForm(props) {

    // this state will track user inputs from the form
    const [songInput, setSongInput] = useState('');
    const [bookInput, setBookInput] = useState('');
    const [movieInput, setMovieInput] = useState('');
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
    const handleMovieInput = (e) => {
        setMovieInput(e.currentTarget.value)
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
    const savedReviewData = { song: songInput, book: bookInput, movie: movieInput, place: placeInput, moment: momentInput, mind: mindInput }


     //get the year variable
     const date = new Date();
     let year = date.getFullYear();


    return (
        <div className="annualReview">
            <h2>Let's record your favorites from the year!</h2>
            <form action="submit" onSubmit={(e) => props.getFormState(e, savedReviewData)}>
                <label htmlFor="song">🎼 Favorite Song</label>
                <input type="text"
                    id="song"
                    onChange={handleSongInput}
                    value={songInput} />
                <label htmlFor="Book">🔖 Favorite Book</label>
                <input type="text"
                    id="book"
                    onChange={handleBookInput}
                    value={bookInput} />
                <label htmlFor="movie">🎬 Favorite Movie</label>
                <input type="text"
                    id="movie"
                    onChange={handleMovieInput}
                    value={movieInput} />
                <label htmlFor="place">🌍 Favorite Place</label>
                <input type="text"
                    id="place"
                    onChange={handlePlaceInput}
                    value={placeInput} />
                <label htmlFor="moment">☁️ Favorite Moment</label>
                <input type="text"
                    id="moment"
                    onChange={handleMomentInput}
                    value={momentInput} />
                <label htmlFor="mind">🛸 Favorite Adventure </label>
                <input type="text"
                    id="mind"
                    onChange={handleMindInput}
                    value={mindInput} />
                <button type="submit" className='button reviewButton'>Pack Up {year} </button>
            </form>
        </div>
    )
}

export default AnnualReviewForm