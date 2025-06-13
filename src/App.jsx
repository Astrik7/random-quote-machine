import { useState } from 'react'
import {quotes} from "/src/assets/quote.js"
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import './App.css'


const getRandomQuote =()=>{
  return quotes[Math.floor(Math.random()* quotes.length)]
}

const getRandomColor =()=>{
  const red= Math.floor(Math.random()*128)
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  return `rgb(${red},${green}, ${blue})`
}

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState(getRandomQuote())
  const [randomColor, setRandomColor] = useState(getRandomColor())
const changeQuote=()=>{
  setQuote(getRandomQuote())
  setRandomColor(getRandomColor())
}

  return (
    <div className="background" style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box">
        <div className="quote-content" style={{ color: randomColor }}>
          <h2 id="text">
            <FaQuoteLeft size="30" style={{ marginRight: "10px", transition }} />
            {quote.quote}
            <FaQuoteRight size="30" style={{ marginLeft: "10px", transition }} />
          </h2>

          <h4 id="author">-{quote.author}</h4>
        </div>
        <div className="buttons">
          <a
            href="href=https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22A%20truly%20rich%20man%20is%20one%20whose%20children%20run%20into%20his%20arms%20when%20his%20hands%20are%20empty.%22%20Unknown"
            id="tweet-quote"
            style={{
              backgroundColor: randomColor, transition
            }}
          >
            <FaTwitter color="white" />
          </a>
          <button
            id="new-quote"
            onClick={changeQuote}
            style={{ backgroundColor: randomColor, transition }}
          >
            Change Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
