import React from "react";
import Article from "./Article";

const ArticleList = ({posts}) => {
    const renderArticles = posts.map((post) => <Article key={post.id}
     title={post.title} 
     date={post.date} 
     preview={post.preview}
     minutes={post.minutes}
     />)
    return (
        <main>
            {renderArticles}
        </main>
    )
}

export default ArticleList