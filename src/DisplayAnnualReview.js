import { Link} from 'react-router-dom';

function DisplayAnnualReview(props) {

    return (
        <div className="displayReview">

            <div className="stage">
                <div className="desk">
                    <img src={require("./assets/notebook.png")}  alt="notebook" className="notebook" />
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/91003/pen.svg" alt="pen" className="pen" />
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/91003/pencil.svg" alt="pencil" className="pencil" />
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/91003/sharpener.svg" alt="sharpener" className="sharpener" />
                </div>
            </div>

            <ul className='displayReview'>
                <li>
                    <h3>Favorite Song: </h3>
                    <p>{props.review[(props.review.length) - 1].name.song}</p>

                </li>
                <li>
                    <h3>Favorite Book: </h3>
                    <p>{props.review[(props.review.length) - 1].name.book}</p>
                </li>
                <li>
                    <h3>Favorite Movie: </h3>
                    <p>{props.review[(props.review.length) - 1].name.show}</p>
                </li>
                <li>
                    <h3>Favorite Place: </h3>
                    <p>{props.review[(props.review.length) - 1].name.place}</p>
                </li>
                <li>
                    <h3>Favorite Moment: </h3>
                    <p>{props.review[(props.review.length) - 1].name.moment}</p>
                </li>
                <li>
                    <h3>Favorite Adventure: </h3>
                    <p>{props.review[(props.review.length) - 1].name.mind}</p>
                </li>
            </ul>

            <Link to='/'>
                <button className='button again'>Record Again</button>
            </Link>

        </div>
    )
}

export default DisplayAnnualReview