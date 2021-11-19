import React from 'react'


const NewsDisplay = ({news}) => {
    
const loaded = () => {
    return <>
<h1>{news.author}</h1>
<h1>{news.name}</h1>
<h1>{news.title}</h1>

    </>
}
 // function for when movie doesn't exist
 const loading = () => {
    return <h1>No News to Display</h1>
}

//use ternary operator to determine which function to run
return news ? loaded() : loading()



}

export default NewsDisplay