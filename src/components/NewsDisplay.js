import React from 'react'


const NewsDisplay = ({news}) => {

const loaded = () => {
    return <div className="card">

    <h1>{news.title}</h1>
    <h1>{news.name}</h1>
    <h1>{news.author}</h1>
    <img className="images" alt='logo' src={news.urlToImage} />
    <h4>{news.description}</h4>
    <a href ={news.url}><button>Read More</button></a>

    </div>
}


//use ternary operator to determine which function to run
return loaded();



}

export default NewsDisplay