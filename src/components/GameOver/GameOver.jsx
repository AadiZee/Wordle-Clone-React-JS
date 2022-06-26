import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

const GameOver = () => {
  const { gameOver, currentAttempt, correctWord } = useContext(AppContext);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "YAY, You Correctly guessed the world!"
          : "MISSION FAILED, We'll get em next time!"}
      </h3>
      <h1>Correct Word Was: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currentAttempt.attempt} attempts</h3>
      )}
      <button
        className="retry"
        disabled={buttonDisabled}
        onClick={() => {
          setButtonDisabled(true);
          window.location.reload(false);
        }}
      >
        {gameOver.guessedWord ? "Another Round?" : "Retry"}
      </button>
    </div>
  );
};

export default GameOver;
