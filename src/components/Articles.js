import NewsDisplay from "./NewsDisplay";

 const Articles = (props) => {

    if (props.news) {
        const articles = props.news.articles;



        return articles.map((article) => {
            return <NewsDisplay news={article} />
        })
    }else { return <h1>loading</h1>}


}

export default Articles