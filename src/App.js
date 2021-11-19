import './App.css';
import NewsDisplay from './components/NewsDisplay';
import Form from './components/Form';
import {useState, useEffect} from 'react'


function App() {

  //variable with your api key
  const apiKey = "884c9477dc6f4e5c8461472861ae9874"

  //state to hold newsdata
  const [news, setNews] = useState(null);

  //function to getNews
  const getNews = async (searchTerm) => {
    //make a fetch request and store response
    const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`);
     // Parse JSON response into a javascript object
     const data = await response.json();
     //set the Movie state to the movie
     setNews(data);
   };

   //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getNews("tesla");
  }, []);

  

  return (
    <div className="App">
      <Form newssearch={getNews} />
      <NewsDisplay news={news} />
    </div>
  );
}

export default App;
