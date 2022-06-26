import React, { useContext } from "react";
import Letter from "../Letter/Letter";
import { AppContext } from "../../App";

const Board = () => {
  const { board } = useContext(AppContext);
  return (
    <div className="board">
      {board
        ? board.map((row, rowIndex) => {
            return (
              <div key={rowIndex} className="row">
                {row.map((word, wordIndex) => {
                  return (
                    <Letter
                      key={wordIndex}
                      letterPos={wordIndex}
                      attemptVal={rowIndex}
                    />
                  );
                })}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Board;
