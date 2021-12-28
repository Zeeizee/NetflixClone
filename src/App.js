import './App.css';
import Row from './Row';
import requests  from './requests';
import Banner from './Banner';
import Nav from './Nav'


function App() {
  return (
    <div className="App">
      {/* navbar */}
      {/* Banner */}
      <Nav/>
      <Banner/>
      {/* Movies Data */}
     <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title="Trending Movies" fetchURL={requests.fetchTrending}/>
     <Row title="Action Movies" fetchURL={requests.fetchTopActionMovies}/>
     <Row title="Comedy Movies" fetchURL={requests.fetchTopComedyMovies}/>
     <Row title="Horror Movies" fetchURL={requests.fetchTopHorrorMovies}/>
     <Row title="Romance Movies" fetchURL={requests.fetchTopRomanceMovies}/>
    
    </div>
  );
}

export default App;
