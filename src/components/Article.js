import React from "react";

const Article = ({title, date = 'January 1, 1970', preview, minutes}) => {

    const minutesEmojis = (minuets) => {
        const numEmojis5 = Math.ceil(minuets / 5)
        const numEmojis10 = Math.ceil(minuets / 10)
        if(minuets < 30){
            return "☕️".repeat(numEmojis5)
        } else if (minuets >= 30){
            return "🍱".repeat(numEmojis10)
        } else return null
      }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {minutesEmojis(minutes)} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article