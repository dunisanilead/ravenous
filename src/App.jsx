import './App.css';
// import Business from './components/Business'
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
      <header>
        <h1>Ravenous</h1>
      </header>
      <div className="hero">
        <h2>Find the best restaurants near you</h2>
        <SearchBar />
      </div>
      <main>
        <BusinessList />
      </main>
    </>
  );
}


export default App;
