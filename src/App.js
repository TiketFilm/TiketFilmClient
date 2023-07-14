import logo from './logo.svg';
import './App.css';
import api, { api1,api2 } from './api/axiosConfig';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {

    try{
      const response = await api2.get('/api/movies');
      console.log(response.data);
      setMovies(response.data); 
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies}/>}/>
          </Route>
        </Routes>

      </div>
  );
}

export default App;
