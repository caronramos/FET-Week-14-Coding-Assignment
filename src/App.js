import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div id='App'>
      <header className="welcome">
        <h1>Movie Review</h1>
      </header>
      <div className='app'>
        <MovieList />
      </div>
    </div>
  );
}

export default App;