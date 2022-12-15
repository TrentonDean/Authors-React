import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import DisplayAllAuthors from './components/DisplayAllAuthors';
import AuthorForm from './components/AuthorForm';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <h1 className='mt-5'>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DisplayAllAuthors/>} />
          <Route element={<AuthorForm/>} path='/new' />
          <Route path='/edit/:id' element={<EditAuthor/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;