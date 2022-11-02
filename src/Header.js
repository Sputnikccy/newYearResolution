import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
        <header className=' wrapper'>
            <div className="buttonOption">
                <Link to='/review'>
                    <button className='yearReview button'>Year-End Review</button>
                </Link>
                <Link to='/resolution'>
                    <button className='yearResolution button'>New Year's Resolution</button>
                </Link>

                <Outlet />
            </div>

        </header>
    )
}

export default Header;