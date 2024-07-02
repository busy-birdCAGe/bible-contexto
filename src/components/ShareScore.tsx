import React, { useState } from 'react';

const ShareScore = () => {
  const [guesses, setGuesses] = useState(['CRANE', 'SHOUT', 'WORDS']);
  const [solution, setSolution] = useState('WORDS');

  const generateScoreGrid = (guesses: any[], solution: string | any[]) => {
    let grid = '';
    guesses.forEach((guess: string | any[]) => {
      let row = '';
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] === solution[i]) {
          row += '🟩'; // Correct letter in the correct position
        } else if (solution.includes(guess[i])) {
          row += '🟨'; // Correct letter in the wrong position
        } else {
          row += '⬛'; // Incorrect letter
        }
      }
      grid += row + '\n';
    });
    return grid;
  };

  const handleShare = () => {
    const scoreGrid = generateScoreGrid(guesses, solution);

    if (navigator.share) {
      navigator.share({
        title: 'My Wordle Score',
        text: `Check out my Wordle score:\n${scoreGrid}`,
        url: window.location.href
      }).then(() => {
        console.log('Score shared successfully');
      }).catch(err => {
        console.error('Error sharing the score: ', err);
      });
    } else {
      // Fallback for browsers that do not support the Web Share API
      navigator.clipboard.writeText(`Check out my Wordle score:\n${scoreGrid}`).then(() => {
        alert('Score copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  };

  return (
    <div>
      <button onClick={handleShare}>Share Score</button>
    </div>
  );
};

export default ShareScore;
