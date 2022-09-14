import React from 'react';
import Instructions from './Instructions.js';
import './App.css';
const displayEmojiName = event => alert(event.target.id)
const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper Testing"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }
];

function App() {
  const greetings = "greetings"
  const displaypara = false
   return(
    <div className="container">
    <h1 id= {greetings}>Hello, World</h1>
    {displaypara && <p>I am writing JSX</p>}
    <Instructions />
    <ul>
       {
        emojis.map(emoji => (
          <li key={emoji.name}>
            <button
              onClick = {displayEmojiName}>
              <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
            </button>

          </li>
        ))
       } 
      </ul>
    </div>
  )
}

export default App;