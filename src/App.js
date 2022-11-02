import './App.css';
import Header from './Header';
import { Link, Routes, Route} from 'react-router-dom';
import AnnualReview from './AnnualReview';
import ResolutionForm from './ResolutionForm.js';
import DisplayAnnualReview from './DisplayAnnualReview';





function App() {

  return (
    <div className="App wrapper">
   
      <div className="title">
        <Link to='/'>
          <h1>New Year Notebook</h1>
        </Link>
        <h2>Close eyes to old ends</h2>
        <h2>Open heart to new beginnings !</h2>
      </div>

      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/review' element={<AnnualReview />} />
        <Route path='/resolution' element={<ResolutionForm />} />
        <Route path='/dispalyReview' element={<DisplayAnnualReview />} />
        
      </Routes>



    </div>


  );
}

export default App;
