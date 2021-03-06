import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';
import './App.css';

export default function App() {
  const [solution, setSolution] = useState(null)
  
  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        // random int between 0 & however many words are in the json file, -1
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle Practice App</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
};

 



// data to track
//   --solution
//     --five letter String
//   --past guesses
//     --array of past guesses
//     --each past guess is an array of letter objects [{}], [{}], [{}], [{}], [{}]
//     --each object represents a letter in the guess word {letter 'e', color: 'green'}
//   --current guess
//     --string 'cheat'
//   --keypad letters
//     --array of letter objects [{key: 'o', color: 'green'}], {key: 'p', color: 'green'}, {etc}, {}, {}
//   --number of turns
//     --an integer 0-6

//   --game process:
//     --entering words
//         --user enters a letter & a square is filled with that letter
//         --when a user hits delete it deletes the previous letter
//         --when a user hits enter, it submits the word
//             --if all the squares are not filled with letters, then the word is not submitted
//             --if that word has already been used in a previous guess, then the word is not submitted
//     --checking submitted words:
//         --each letter is checked to see if it matches to the solution
//         --each letter is assigned a color based on it's inclusion in the solution
//             --exact matches (correct position in the solution) are green
//             --partial matches (in the solution but not the correct position) are yellow
//             --none-matches (not in the solution at all) are grey
//         --the guess is added the grid with the correct colors
//         --the current guess moves to the next row
//         --the keypad letters are updated (colors)
//     --ending the game:
//         --when the guessed word fully matches the solution
//             --modal to say 'well done'
//     --when the user runs out of guesses
//         --modal to say 'unlucky'

// solution data options:
//  1. third party API 
//  2. own database (like MongoDB)
//  3. JSON file