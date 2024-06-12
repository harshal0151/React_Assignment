import React from 'react'
import quotes from "../assets/dataQ"

function Quote() {
  return (
    <section>
        <div className="Qcontainer">
          {quotes.map((quote, index) => (
            <div className="Qcard" key={index}>
              <p>{quote.quote}</p>
              <span>- {quote.author}</span>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Quote